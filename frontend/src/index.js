import React from "react";
import ReactDOM from "react-dom";
import Genrosys from "./Genrosys";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <HashRouter basename = "/">
        <Genrosys />
    </HashRouter>, 
    document.getElementById("root")
);