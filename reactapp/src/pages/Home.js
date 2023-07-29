import React from 'react';
import Navbar from '../Navbar';
import Video from './Video';
import About from './About';
import Coursedisplay from './Coursedisplay';
import Teacher from './Teacher';

 import Testimonial from './Testimonial';
 import Ctc from './Ctc';
 import Footer from './Footer';
 const Home = () => {
   return (

      <>
      <div className='main'>
        <Navbar/>
       <Video/>
       <About/>
       <Coursedisplay/>
       <Teacher/>
       <Testimonial/>
      
        
        <Ctc/>
        <Footer/>
        </div>
    </>
   );
 };
 
 export default Home;
 
 
 
 
 
 