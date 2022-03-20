import { useDispatch, useSelector } from "react-redux";
import { dismissPopup } from "../../redux/popups/popup_slice";

const Popup = (props) => {
	const popup = useSelector((state) => state.popup);
	const dispatch = useDispatch();
	return (
		<div
			className={`${
				popup.show ? "absolute" : "hidden"
			} top-0 left-0 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-70`}
		>
			<div className="flex h-auto w-4/5 flex-col rounded-2xl  bg-red-600 shadow-2xl sm:w-2/4">
				<div className="mx-6 mt-4 select-none text-lg font-semibold text-white subpixel-antialiased">
					{popup.title}
				</div>
				<div className="mx-6 mt-3 break-all text-sm font-normal text-white subpixel-antialiased">
					{popup.message}
				</div>
				<div
					className="my-6 ml-auto mr-8 cursor-pointer select-none rounded-lg bg-white py-2 px-4 font-semibold text-red-600 subpixel-antialiased"
					onClick={() => dispatch(dismissPopup({}))}
				>
					{popup.buttonText}
				</div>
			</div>
		</div>
	);
};

export { Popup };
