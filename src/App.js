import { Provider, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navbar } from "./widgets/navbar/Navbar";
import store from "./redux/store";
import { Popup } from "./widgets/popup/popup";

const App = (props) => {
	return (
		<Provider store={store}>
			<div className="h-screen w-screen bg-stone-50">
				<Navbar></Navbar>
				<div className="mt-10">
					<Outlet />
				</div>
			</div>
			<Popup />
		</Provider>
	);
};

export default App;
