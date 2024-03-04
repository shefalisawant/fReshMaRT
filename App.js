import React from "react";
import ReactDOM  from "react-dom/client";
//ReactElement
const heading=<h1>I'm React Element</h1>;
const Heading=()=>(
    <div>
        <h2>I'm functional component
    </h2></div>
)
const HeadingTwo=()=>{
    return(
        <>
        <Heading/>
        <div>Composite Component</div>
        <h3>Hello world react JSX😀</h3>
    </>)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingTwo/>);