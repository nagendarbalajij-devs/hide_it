const FullPageLoader = (props) => {
  return (
    <div className="flex h-screen w-screen bg-stone-100">
      <div className="m-auto content-center justify-center text-center text-4xl font-bold text-red-600">
        Loading...
      </div>
    </div>
  );
};

export { FullPageLoader };
