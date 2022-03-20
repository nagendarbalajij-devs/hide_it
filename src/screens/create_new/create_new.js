import { ThemeProvider } from "@emotion/react";
import { Switch } from "@mui/material";
import { BigNumber, ethers } from "ethers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveMessageHelper } from "../../helper/contract_helper";
import { SaveMessageModel } from "../../model/models";
import { showPopup } from "../../redux/popups/popup_slice";
import { setupListeners } from "../../services/contract_listeners";
import {
	convertEthToUsd,
	getUsdValue,
} from "../../services/conversion_service";
import { theme } from "../../utils/mui_config";
import { popups } from "../../utils/popup_utils";
import { requestConnectToWallet } from "../../utils/web3_utils";
import { AccentButton } from "../../widgets/button/accent_button";
import { AccentInput, AccentInputArea } from "../../widgets/inputs";

const CreateNew = (props) => {
	const [usdValue, setUsdValue] = useState(0);
	const dispatch = useDispatch();

	const [message, setMessage] = useState("");
	const [content, setContent] = useState("");
	const [fMessage, setFMessage] = useState("");
	const [fine, setFine] = useState(0);
	const [privateMessage, setPrivate] = useState(true);

	var walletState = useSelector((state) => state.walletState);
	getUsdValue().then(setUsdValue);
	return (
		<div className="flex h-full flex-col px-6 py-6">
			<div className="flex h-full flex-col items-center justify-start overflow-clip overflow-y-scroll sm:justify-center">
				{/* <div className="mt-4 mb-4 flex w-full justify-center text-2xl font-bold text-red-600 xl:w-1/2">
					Create a new message...
				</div> */}
				<div className="flex w-full flex-col items-center justify-between  lg:flex-row xl:w-2/3">
					<div className="flex select-none flex-row text-xl font-semibold text-red-600 subpixel-antialiased">
						<div className="mr-2">Create a new message...</div>

						<div className="text-red-600">
							{walletState.connected ? walletState.network : ""}
						</div>
					</div>
					<div
						className={`${
							!walletState.connected ? "flex" : "hidden"
						} mt-4 select-none rounded-full border-2 border-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-600 hover:text-white hover:shadow-lg sm:mt-0`}
						onClick={() => requestConnectToWallet()}
					>
						{walletState.providerAvailable
							? !walletState.connected
								? `Conntect to wallet`
								: `${walletState.address}`
							: `No providers available!!`}
					</div>
					<div
						className={`${
							walletState.connected ? "flex" : "hidden"
						}  my-4 text-xs font-semibold text-red-600`}
					>
						{walletState.address}
					</div>
				</div>
				<div className="mt-6 flex w-full justify-center xl:w-2/3">
					<AccentInputArea
						className="w-full"
						placeholder="Something about the content you wish to hide..."
						label="Enter a message"
						rows={2}
						onChange={setMessage}
					/>
				</div>
				<div className="mt-6 flex w-full justify-center xl:w-2/3">
					<AccentInputArea
						className="w-full"
						placeholder="Content you wish to hide"
						label="Enter a message you wish to hide"
						rows={4}
						onChange={setContent}
					/>
				</div>
				<div className="mt-6 flex w-full justify-center xl:w-2/3">
					<AccentInputArea
						className="w-full"
						placeholder="A message to the future you..."
						label="Enter a message for yourself to the future"
						rows={2}
						onChange={setFMessage}
					/>
				</div>
				<div className="mt-6 flex w-full flex-row items-center justify-between xl:w-2/3">
					<div className="text-lg font-semibold">{`Fine Amount is:   ${convertEthToUsd(
						fine,
						usdValue
					).toFixed(2)} USD`}</div>
					<AccentInput
						className="w-1/4"
						placeholder="ETH"
						label="Enter a message for yourself to the future"
						rows={1}
						value={fine}
						onChange={(e) => setFine(e)}
					/>
				</div>
				<div className="mt-6 flex w-full flex-row items-center justify-between xl:w-2/3">
					<div className="text-lg font-semibold">
						{privateMessage
							? `This is a private message`
							: `This message is open to everyone`}
					</div>
					<ThemeProvider theme={theme}>
						<Switch
							checked={privateMessage}
							size="large"
							color="secondary"
							onChange={() => setPrivate(!privateMessage)}
						/>
					</ThemeProvider>
				</div>

				<div className="mt-6">
					<AccentButton
						onClick={async () => {
							if (!walletState.connected) {
								dispatch(showPopup(popups.noWalletConnected));
								return;
							}
							const newMessage = new SaveMessageModel();
							newMessage.content = content;
							newMessage.message = message;
							newMessage.fMessage = fMessage;
							newMessage.fine = fine * 10 ** 18;
							newMessage.isPrivate = privateMessage;
							if (validate(newMessage)) {
								setupListeners(dispatch);
								await saveMessageHelper(newMessage);
								dispatch(showPopup(popups.messageSaved));
							} else {
								dispatch(showPopup(popups.check));
							}
						}}
						enabled={walletState.buttonState}
					>
						Hide It
					</AccentButton>
				</div>
			</div>
		</div>
	);
};

const validate = (message) => {
	return (
		!isNaN(message.fine) &&
		message.content !== "" &&
		message.message !== "" &&
		message.fMessage !== ""
	);
};

export { CreateNew };
