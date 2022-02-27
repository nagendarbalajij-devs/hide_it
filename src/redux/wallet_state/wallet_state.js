import { createSlice } from "@reduxjs/toolkit";
import { getButtonState } from "../../services/network_services";

export const walletStateSlice = createSlice({
	name: "walletState",
	initialState: {
		address: "",
		network: "",
		provider: undefined,
		providerAvailable: false,
		connected: false,
		buttonState: false,
	},
	reducers: {
		setAddress: (state, value) => {
			state.address = value.payload;
		},
		setNetwork: (state, value) => {
			state.network = value.payload;
			state.buttonState = getButtonState(value.payload).buttonState;
		},
		setProviderAvailable: (state, value) => {
			state.providerAvailable = value.payload;
		},
		setProvider: (state, value) => {
			state.provider = value.payload.provider;
		},
		setConnected: (state, value) => {
			state.connected = value.payload;
		},
	},
});

export const {
	setAddress,
	setNetwork,
	setProvider,
	setProviderAvailable,
	setConnected,
} = walletStateSlice.actions;

export default walletStateSlice.reducer;
