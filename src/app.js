import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";

// reset css
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const jsx = <AppRouter />;
ReactDOM.render(jsx, document.getElementById("app"));
