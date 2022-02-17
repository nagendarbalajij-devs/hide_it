import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
	name: "userDetails",
	initialState: {
		name: "Initial Name",
		wallet: "",
	},
	reducers: {
		setName: (state, value) => {
			state.name = value.payload;
		},
		setStateWallet: (state, value) => {
			state.wallet = value.payload;
		},
	},
});

export const { setName, setStateWallet } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
