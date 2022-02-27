import { ethers } from "ethers";
import { showPopup } from "../redux/popups/popup_slice";
import { popups } from "../utils/popup_utils";

export var gProvider;

export const checkWallet = ({
	setNetwork,
	setConnected,
	setAddress,
	setProviderAvailable,
	setProvider,
}) => {
	try {
		let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		gProvider = provider;
		provider.on("network", (newNetwork, oldNetwork) => {
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
		// setProvider(provider);
	} catch (e) {
		setProviderAvailable(false);
	}
};

export const getButtonState = (networkName) => {
	switch (networkName) {
		case "homestead":
			return {
				popup: showPopup(popups.etherMainnetWarning),
				buttonState: true,
			};
		case "unknown":
			return {
				buttonState: true,
			};
		case "rinkeby":
			return {
				buttonState: true,
			};
		default:
			return {
				popup: showPopup(popups.networkNotSupported),
				buttonState: false,
			};
	}
};
