import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./user_details/user_details_slice";
import appStateReducer from "./app_state/app_state";
import popupReducer from "./popups/popup_slice";
import walletState from "./wallet_state/wallet_state";

export default configureStore({
	reducer: {
		userDetails: userDetailsReducer,
		appState: appStateReducer,
		popup: popupReducer,
		walletState: walletState,
	},
});
