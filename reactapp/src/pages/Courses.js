import React from "react";
import Navbar from "../Navbar";
import Topcourse from "./Topcourse";
import Coursedisplay from "./Coursedisplay";
import Ctc from "./Ctc";
import Footer from "./Footer";
function Courses(){
    return(
        <>
        <Navbar/>
        
        <Coursedisplay/>
        <Topcourse/>
        <Ctc/>
        <Footer/>
        </>
    );
}
export default Courses;