import { createSlice } from "@reduxjs/toolkit";

export const contnetPopupSlice = createSlice({
	name: "contentPopup",
	initialState: {
		show: false,
		content: {},
	},
	reducers: {
		showContentPopup: (state, value) => {
			state.show = true;
			state.content = value.payload;
		},
		dismissPopup: (state) => {
			state.show = false;
		},
	},
});

export const { showContentPopup, dismissPopup } = contnetPopupSlice.actions;
export default contnetPopupSlice.reducer;
