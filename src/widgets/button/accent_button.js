const AccentButton = (props) => {
	return (
		<div
			className="cursor-pointer select-none rounded-md bg-red-600 py-2 px-10 text-center font-semibold text-white subpixel-antialiased shadow-sm hover:shadow-lg"
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
};

export { AccentButton };
