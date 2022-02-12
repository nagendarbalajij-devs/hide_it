import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./user_details/user_details_slice";
import appStateReducer from "./app_state/app_state";

export default configureStore({
	reducer: {
		userDetails: userDetailsReducer,
		appState: appStateReducer,
	},
});
