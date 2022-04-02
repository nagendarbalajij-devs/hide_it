import { dismissPopup, showPopup } from "../redux/popups/popup_slice";
import { ContractServices } from "./contract_services";

export const setupListeners = (dispatch) => {
	ContractServices.instance.provider.on("block", () => {
		console.log("Block save message");
		ContractServices.instance.contract.on("ReturnSaveMessageId", (val) => {
			dispatch(
				showPopup({
					title: "Your message has been saved",
					message: "With message id: " + val,
				})
			);
		});
	});
};

export const setupMessageListener = (dispatch, onMessageReceived) => {
	console.log("");
	ContractServices.instance.contract.once("ReturnMessage", (val) => {
		console.log("");
		dispatch(dismissPopup());
		onMessageReceived?.(val);
		ContractServices.instance.contract.removeAllListeners("ReturnMessage");
	});
};
