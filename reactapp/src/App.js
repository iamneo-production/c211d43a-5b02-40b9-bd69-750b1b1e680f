import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Coursedisplay from './pages/Coursedisplay';
import Topcourse from './pages/Topcourse';
import Teacher from './pages/Teacher';
import Testimonial from './pages/Testimonial';
import Ctc from './pages/Ctc';
import Footer from './pages/Footer';
import Video from './pages/Video';
import Aboutus from './pages/Aboutus';
import Courses from './pages/Courses';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Contact from './pages/Contact';
import Instructor from './pages/Instructor';
function App() {
  return (
   <>
    <Router>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='Aboutus' element={<Aboutus/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Coursedisplay' element={<Coursedisplay/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Topcourse' element={<Topcourse/>}/>
      <Route path='/Teacher' element={<Teacher/>}/>
      <Route path='/Testimonial' element={<Testimonial/>}/>
      <Route path='/Ctc' element={<Ctc/>}/>
      <Route path='/Footer' element={<Footer/>}/>  
      <Route path='/Video' element={<Video/>}/> 
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Instructor' element={<Instructor/>}/>
     </Routes>
    </Router>
    
  
 </>


  );
}

export default App;