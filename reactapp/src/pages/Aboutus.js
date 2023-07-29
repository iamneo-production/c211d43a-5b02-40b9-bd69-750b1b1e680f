import React from "react";
import Navbar from "../Navbar";
import Ctc from "./Ctc";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Aboutus(){
  const navigate = useNavigate();

  const handleclick=()=>{
    navigate('/auth');
  }

    const imageUrl = 'https://img.freepik.com/free-photo/happy-man-with-diploma-academic-cap_23-2147745788.jpg?w=900&t=st=1689242947~exp=1689243547~hmac=a4fbc203d18a0fb735ce4d5a03ee87f3fddcd670761f8b04f0539b59753d0698';
    return(
        <>
        <div className="screen1">
        <Navbar/>
            <section class="about">
            <div class="container">
              
    
              <figure class="about-banner">
                <img src={imageUrl} alt="A young lady sits, holding a pen and a notebook."/>
              </figure>
    
              <div class="about-content">
    <p></p>
    <p></p>
                <h1 class="h1 about-title">Why Choose us</h1>
    
                <p class="section-text">
                We are a team of dedicated educators and professionals passionate about providing high-quality online courses and educational resources.   
                Our mission is to make learning accessible, convenient, and engaging for students of all ages and backgrounds.
                </p>
                <p class="section-text">
                Join our e-learning community today and embark on an exciting journey of personal and professional growth. We believe that education has the power to transform lives, and we're here to support you every step of the way.
                </p>
                
                <button class="btn btn-primary" onClick={handleclick}>Get Started</button>
    
              </div>
    
            </div>
          </section>
          <Ctc/>
          <Footer/>
          </div>
          </>
    );
}
export default Aboutus;