import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
	name: "popup",
	initialState: {
		show: false,
		title: "",
		message: "",
		buttonText: "",
	},
	reducers: {
		showPopup: (state, value) => {
			state.show = true;
			state.title = value.payload.title;
			state.message = value.payload.message;
			state.buttonText = value.payload.buttonText ?? "OK";
		},
		dismissPopup: (state) => {
			state.show = false;
		},
	},
});

export const { showPopup, dismissPopup } = popupSlice.actions;
export default popupSlice.reducer;
