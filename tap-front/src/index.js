import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import GlobalStyle from "./global/style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
    <ToastContainer />
  </ReduxProvider>
);
