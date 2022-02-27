import { Provider, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navbar } from "./widgets/navbar/Navbar";
import store from "./redux/store";
import { Popup } from "./widgets/popup/popup";
import { WalletStatePage } from "./screens/wallet_state_page/wallet_state_page";

const App = (props) => {
	return (
		<Provider store={store}>
			<WalletStatePage>
				<div className="relative h-screen w-screen bg-stone-50">
					<Navbar></Navbar>
					<div className="absolute top-20 left-0 right-0 bottom-0">
						<Outlet />
					</div>
				</div>
				<Popup />
			</WalletStatePage>
		</Provider>
	);
};

export default App;
