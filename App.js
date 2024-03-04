import React from "react";
import ReactDOM  from "react-dom/client";
//React.createElement=>ReactElemet-JS Object=> HTMLElement(render)
const heading=React.createElement("h1",{
    id:"heading"
},"Hello world react 😀");
const newHeading=<h1 className="heading">Hello world react JSX😀</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(newHeading);