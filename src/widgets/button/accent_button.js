const AccentButton = (props) => {
	const enabled = props.enabled ?? true;
	return (
		<div
			className={` select-none rounded-md ${
				enabled
					? `cursor-pointer bg-red-600 shadow-sm hover:shadow-lg`
					: `cursor-not-allowed bg-gray-400`
			} py-2 px-10 text-center font-semibold text-white subpixel-antialiased`}
			onClick={enabled ? props.onClick : null}
		>
			{props.children}
		</div>
	);
};

export { AccentButton };
