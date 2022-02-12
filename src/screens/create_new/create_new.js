import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showPopup } from "../../redux/popups/popup_slice";
import { createRecord } from "../../services/contract_services";
import { popups } from "../../utils/popup_utils";
import { requestConnectToWallet } from "../../utils/web3_utils";
import { AccentButton } from "../../widgets/button/accent_button";
import { AccentInput } from "../../widgets/inputs";

const CreateNew = (props) => {
	const [providerAvailable, setProviderAvailable] = useState(false);
	const [provider, setProvider] = useState();
	const [connected, setConnected] = useState(false);
	const [address, setAddress] = useState("");
	const [network, setNetwork] = useState("");
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
		<div className="flex flex-col px-12 py-6">
			<div className="flex flex-row items-center justify-between">
				<div className="flex select-none flex-row font-semibold subpixel-antialiased">
					<div className="mr-2">
						{connected ? `You are connected to >` : `You are not connected`}{" "}
					</div>
					<div className="text-red-600">{connected ? network : ""}</div>
				</div>
				<div
					className="select-none rounded-full border-2 border-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-600 hover:text-white hover:shadow-lg"
					onClick={() => requestConnectToWallet(checkWallet)}
				>
					{providerAvailable
						? !connected
							? `Conntect to wallet`
							: `${address}`
						: `No providers available!!`}
				</div>
			</div>
			<div className="mt-6">
				<AccentInput placeholder="Enter a message" label="Enter a message" />
			</div>
			<div className="mt-6">
				<AccentInput
					placeholder="Enter"
					label="Enter a message you wish to hide"
				/>
			</div>
			<div className="mt-6">
				<AccentInput
					placeholder="Enter a message"
					label="Enter a message for yourself to the future"
				/>
			</div>
			<div className="mt-6 w-2/3">
				<AccentButton
					onClick={async () => {
						console.log(provider.getSigner(0));
						createRecord(provider.getSigner(0));
					}}
				>
					Sign
				</AccentButton>
			</div>
		</div>
	);
};

export { CreateNew };
