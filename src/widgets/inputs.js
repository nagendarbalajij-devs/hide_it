const AccentInput = (props) => {
	return (
		<input
			className={`rounded-md border-0 bg-red-50 py-2 px-6 font-semibold subpixel-antialiased outline-red-600 placeholder-shown:font-normal ${props.className}`}
			placeholder={props.placeholder}
		></input>
	);
};

const AccentInputArea = (props) => {
	return (
		<textarea
			rows={props.rows}
			className={`resize-none rounded-md border-0 bg-red-50 py-2 px-6 font-semibold subpixel-antialiased outline-red-600 placeholder-shown:font-normal ${props.className}`}
			placeholder={props.placeholder}
		></textarea>
	);
};

export { AccentInput, AccentInputArea };
