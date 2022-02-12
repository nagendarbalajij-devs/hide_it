import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateNew } from "./screens/create_new/create_new";
import { ViewPage } from "./screens/view_page/view_page";
import { AuthLoadingPage, AuthPage } from "./screens/auth_page/auth_page";
import { FullPageLoader } from "./widgets/loaders";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/redirect" element={<AuthLoadingPage />} />
        <Route path="/" element={<App />}>
          <Route path="new" element={<CreateNew />} />
          <Route path="view" element={<ViewPage />} />
          <Route path="auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
