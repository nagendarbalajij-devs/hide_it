import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
	name: "popup",
	initialState: {
		show: false,
		title: "",
		message: "",
		buttonText: "",
		dismissable: true,
	},
	reducers: {
		showPopup: (state, value) => {
			state.show = true;
			state.title = value.payload.title;
			state.message = value.payload.message;
			state.buttonText = value.payload.buttonText ?? "OK";
			state.dismissable = value.payload.dismissable ?? true;
		},
		dismissPopup: (state) => {
			state.show = false;
		},
	},
});

export const { showPopup, dismissPopup } = popupSlice.actions;
export default popupSlice.reducer;
