const AccentInput = (props) => {
	return (
		<div className="flex flex-col items-start justify-start">
			<div className="mb-2 text-xs font-normal">{props.label}</div>
			<input
				className="rounded-md border-0 bg-red-50 py-2 px-6 font-semibold subpixel-antialiased outline-red-600 sm:w-2/3"
				placeholder={props.placeholder}
			></input>
		</div>
	);
};

export { AccentInput };
