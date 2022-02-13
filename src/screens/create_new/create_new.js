import { ThemeProvider } from "@emotion/react";
import { Switch } from "@mui/material";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showPopup } from "../../redux/popups/popup_slice";
import { createRecord } from "../../services/contract_services";
import { theme } from "../../utils/mui_config";
import { popups } from "../../utils/popup_utils";
import { requestConnectToWallet } from "../../utils/web3_utils";
import { AccentButton } from "../../widgets/button/accent_button";
import { AccentInput, AccentInputArea } from "../../widgets/inputs";

const CreateNew = (props) => {
	const [providerAvailable, setProviderAvailable] = useState(false);
	const [provider, setProvider] = useState();
	const [connected, setConnected] = useState(false);
	const [address, setAddress] = useState("");
	const [network, setNetwork] = useState("");
	const [privateMessage, setPrivate] = useState(true);
	const dispath = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		try {
			window.ethereum.on("accountsChanged", () => {
				checkWallet();
			});
		} catch (e) {
			dispath(showPopup(popups.showNoWalletFoundPopup));
			navigate(-1);
		}
		checkWallet();
	}, []);

	const checkWallet = () => {
		try {
			let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
			provider.on("network", (newNetwork, oldNetwork) => {
				console.log(newNetwork.name);
				setNetwork(newNetwork.name);
				if (oldNetwork) {
					window.location.reload();
				}
			});
			provider.listAccounts().then((val) => {
				setConnected(val.length !== 0);
				setAddress(val);
			});
			setProviderAvailable(true);
			setProvider(provider);
		} catch (e) {
			setProviderAvailable(false);
		}
	};

	return (
		<div className="flex h-full flex-col px-6 py-6">
			<div className="flex h-full flex-col items-center justify-start overflow-clip overflow-y-scroll sm:justify-center">
				<div className="mb-12 flex w-full justify-center text-4xl font-bold text-red-600 xl:w-1/2">
					Create a new message...
				</div>
				<div className="flex w-full flex-col items-center justify-between  lg:flex-row xl:w-1/2">
					<div className="flex select-none flex-row font-semibold subpixel-antialiased">
						<div className="mr-2">
							{connected ? `You are connected to >` : `You are not connected`}{" "}
						</div>
						<div className="text-red-600">{connected ? network : ""}</div>
					</div>
					<div
						className={`${
							!connected ? "flex" : "hidden"
						} mt-4 select-none rounded-full border-2 border-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-600 hover:text-white hover:shadow-lg sm:mt-0`}
						onClick={() => requestConnectToWallet(checkWallet)}
					>
						{providerAvailable
							? !connected
								? `Conntect to wallet`
								: `${address}`
							: `No providers available!!`}
					</div>
					<div
						className={`${
							connected ? "flex" : "hidden"
						}  my-4 text-xs font-semibold text-red-600`}
					>
						{address}
					</div>
				</div>
				<div className="mt-6 flex w-full justify-center xl:w-1/2">
					<AccentInputArea
						className="w-full"
						placeholder="Something about the content you wish to hide..."
						label="Enter a message"
						rows={2}
					/>
				</div>
				<div className="mt-6 flex w-full justify-center xl:w-1/2">
					<AccentInputArea
						className="w-full"
						placeholder="Content you wish to hide"
						label="Enter a message you wish to hide"
						rows={4}
					/>
				</div>
				<div className="mt-6 flex w-full justify-center xl:w-1/2">
					<AccentInputArea
						className="w-full"
						placeholder="A message to the future you..."
						label="Enter a message for yourself to the future"
						rows={2}
					/>
				</div>
				<div className="mt-6 flex w-full flex-row items-center justify-between xl:w-1/2">
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

				<div className="mt-6 mb-12">
					<AccentButton
						onClick={async () => {
							console.log(provider.getSigner(0));
							createRecord(provider.getSigner(0));
						}}
					>
						Hide It
					</AccentButton>
				</div>
			</div>
		</div>
	);
};

export { CreateNew };
