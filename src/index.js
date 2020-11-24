import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3Provider } from "./components/Context";


ReactDOM.render(
    <Web3Provider>
        <App />
    </Web3Provider>, 
    document.getElementById("root")
);
