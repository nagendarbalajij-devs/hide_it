import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
	name: "appState",
	initialState: {
		loggedIn: false,
	},
	reducers: {
		setAppState: (state, value) => {
			state.loggedIn = value.payload;
		},
	},
});

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
