import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { FullPageLoader } from "../../widgets/loaders";

const AuthPage = (props) => {
  return <div>Auth Page</div>;
};

const AuthLoadingPage = (props) => {
  let navigate = useNavigate();
  const [token, setToken] = useState("Na");

  useEffect(() => {
    let url = window.location.href.replace("#", "?");
    let accessToken = new URL(url).searchParams.get("access_token");
    console.log(accessToken);
    let decoded = jwtDecode(accessToken);
    setToken("Nagendar");
    localStorage.setItem("hide_id_token", accessToken);
    navigate("/");
  }, []);

  return (
    <div>
      <FullPageLoader />
    </div>
  );
};

export { AuthPage, AuthLoadingPage };
