import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	setAddress,
	setConnected,
	setNetwork,
	setProvider,
	setProviderAvailable,
} from "../../redux/wallet_state/wallet_state";
import { ContractServices } from "../../services/contract_services";
import { checkWallet, getButtonState } from "../../services/network_services";

export const WalletStatePage = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	ContractServices.init();

	useEffect(() => {
		try {
			window.ethereum.on("accountsChanged", () => {
				_checkWallet();
			});
		} catch (e) {}
		_checkWallet();
	});

	const _checkWallet = () => {
		checkWallet({
			setAddress: (val) => {
				dispatch(setAddress(val));
			},
			setNetwork: (val) => {
				dispatch(setNetwork(val));
				ContractServices.instance.loadContract(val);
				props.onWalletLoadCallback();
				if (getButtonState(val).popup) {
					dispatch(getButtonState(val).popup);
				}
			},
			setProvider: (val) => {
				// dispatch(setProvider({ provider: val }));
			},
			setProviderAvailable: (val) => {
				dispatch(setProviderAvailable(val));
			},
			setConnected: (val) => {
				dispatch(setConnected(val));
			},
		});
	};
	return <div>{props.children}</div>;
};
