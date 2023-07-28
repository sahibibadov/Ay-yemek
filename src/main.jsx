import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./i18n.js";
import { HelmetProvider } from "react-helmet-async";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </StrictMode>,
);
