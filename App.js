import React from "react";
import ReactDOM  from "react-dom/client";
import Layout from "./src/Layout";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { PATHS } from "./routes";
const App=()=>{
    return(
       <Routes> 
          <Route path ={PATHS.HOME} element= {<Layout />}/> 
          <Route path ={PATHS.ABOUT} element= {<Layout />}/> 
          <Route path ={PATHS.CATEGORIES} element= {<Layout />}/> 
          <Route path ={PATHS.CONTACT} element= {<Layout />}/>
          <Route path ={PATHS.PARTNER} element= {<Layout />}/> 
       </Routes> )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router> <App/></Router> );