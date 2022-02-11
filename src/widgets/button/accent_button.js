const AccentButton = (props) => {
  return (
    <div className="cursor-pointer rounded-md bg-red-600 py-2 px-10 font-semibold text-white shadow-sm hover:shadow-lg">
      {props.children}
    </div>
  );
};

export { AccentButton };
