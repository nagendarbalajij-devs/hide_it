import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./user_details/user_details_slice";
import appStateReducer from "./app_state/app_state";
import popupReducer from "./popups/popup_slice";

export default configureStore({
	reducer: {
		userDetails: userDetailsReducer,
		appState: appStateReducer,
		popup: popupReducer,
	},
});
