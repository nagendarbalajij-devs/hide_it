import { showPopup } from "../redux/popups/popup_slice";
import { ContractServices } from "./contract_services";

export const setupListeners = (dispatch) => {
	ContractServices.instance.provider.on("block", () => {
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
