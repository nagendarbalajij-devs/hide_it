import { useDispatch, useSelector } from "react-redux";
import { dismissPopup } from "../../redux/content_popup/content_popup_slice";

const ContentPopup = (props) => {
	const popup = useSelector((state) => state.contentPopup);
	const e = popup.content;
	const dispatch = useDispatch();
	console.log(e);
	return (
		<div
			className={`${
				popup.show ? "absolute" : "hidden"
			} top-0 left-0 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-70`}
		>
			<div className="flex h-auto w-4/5 flex-col rounded-2xl  bg-white shadow-2xl sm:w-3/4">
				<div className="mx-6 mt-4 select-none text-lg font-semibold text-red-600 subpixel-antialiased">
					{e?.message}
				</div>
				<div className="mx-6 break-all text-xs font-normal text-red-600 subpixel-antialiased">
					{e?.messageId}
				</div>
				<div
					className="my-6 ml-auto mr-8 cursor-pointer select-none rounded-lg bg-red-600 py-2 px-4 font-semibold text-white subpixel-antialiased"
					onClick={() => dispatch(dismissPopup({}))}
				>
					Close
				</div>
			</div>
		</div>
	);
};

export { ContentPopup };
