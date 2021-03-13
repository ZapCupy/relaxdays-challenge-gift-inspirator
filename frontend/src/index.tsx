import { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./components";
import { reportWebVitals } from "./reportWebVitals";
import "./index.scss";
import { HashRouter } from "react-router-dom";

render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
