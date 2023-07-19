import React from 'react';
import Navbar from '../Navbar';
import Video from './Video';
import About from './About';
import Coursedisplay from './Coursedisplay';
import "./landing.css"

 import Testimonial from './Testimonial';
 import Ctc from './Ctc';
 import Footer from './Footer';
 const Home = () => {
   return (

      <>
        <Navbar/>
       <Video/>
       <About/>
       <Coursedisplay/>
        <Testimonial/>
        <Ctc/>
        <Footer/>
    </>
   );
 };
 
 export default Home;
 
 
 
 
 
 