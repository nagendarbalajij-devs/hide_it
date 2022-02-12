import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
	name: "userDetails",
	initialState: {
		name: "Initial Name",
	},
	reducers: {
		setName: (state, value) => {
			state.name = value.payload;
		},
	},
});

export const { setName } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
