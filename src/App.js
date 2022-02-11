import { Outlet } from "react-router-dom";
import { Navbar } from "./widgets/navbar/Navbar";

const App = (props) => {
  return (
    <div className="h-screen w-screen bg-stone-50">
      <Navbar loggedIn={true}></Navbar>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
