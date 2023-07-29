import React from "react";
import Navbar from "../Navbar";
import Topcourse from "./Topcourse";
import Ctc from "./Ctc";
import Footer from "./Footer";
import "./landing.css"
function Courses(){
    return(
        <>
        <div className="screen1">
        <Navbar/>
        <Topcourse/>
        <Ctc/>
        <Footer/>
        </div>
        </>
    );
}
export default Courses;