import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// 
import { Provider } from "react-redux";
import store from "./Store/store.ts";
import { BrowserRouter } from "react-router-dom";
// CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// npm i react-axios => npm uninstall --save react-axios 
// npm i react-router-dom
// npm i formik
// npm i yup
// npm install @reduxjs/toolkit
// npm install react-redux
// npm i axios
