import { useDispatch } from "react-redux";
import { showPopup } from "../redux/popups/popup_slice";

export const popups = {
	showNoWalletFoundPopup: {
		title: "Error",
		message:
			"You need to have a wallet to make transactions to the blockchain. Kindly download and use a wallet like Metamask to continue",
	},
};
