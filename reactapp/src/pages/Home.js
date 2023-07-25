import React from 'react';
import Navbar from '../Navbar';
import Video from './Video';
import About from './About';
import Coursedisplay from './Coursedisplay';
import Teacher from './Teacher';

 import Testimonial from './Testimonial';
 import Ctc from './Ctc';
 import Footer from './Footer';
 import Topcourse from './Topcourse';
 const Home = () => {
   return (

      <>
        <Navbar/>
       <Video/>
       <About/>
       <Coursedisplay/>
       <Topcourse/>
       <Teacher/>
        <Testimonial/>
        
        <Ctc/>
        <Footer/>
    </>
   );
 };
 
 export default Home;
 
 
 
 
 
 