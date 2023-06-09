import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Select from "./Components/Landing/Select";
import Auth from "./Components/Authentication/Auth"
import InstructorAuth from './Components/Authentication/InstructorAuth';

import NavCandidate from "./Components/NavCandidate";
import NavAdmin from "./Components/NavAdmin";

import UserDashboard from "./Module/Candidate/UserDashboard/UserDashboard";
import UserCourses from "./Module/Candidate/UserCourses/UserCourses"
import UserLeaderboard from "./Module/Candidate/UserLeaderboard/UserLeaderboard";
import UserSettings from "./Module/Candidate/UserSettings/UserSettings";
import UserHelpcenter from "./Module/Candidate/UserHelpCenter/UserHelpCenter";

import InstructorDashboard from "./Module/Instructor/InstructorDashboard/InstructorDashboard";
import InstructorCourses from "./Module/Instructor/InstructorCourses/InstructorCourses";
import InstructorDetails from "./Module/Instructor/InstructorDetails/InstructorDetails";
import InstructorSettings from "./Module/Instructor/InstructorSettings/InstructorSettings";
import Trainee from "./Module/Instructor/Trainee/Trainee";

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
import Contact from './pages/Contact'; // Make sure to import the Contact component
import Instructor from './pages/Instructor'; // Make sure to import the Instructor component

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Select" element={<Select />} />
          
          <Route path="/Auth" element={<Auth/>}/>
          <Route path="/InstructorAuth" element={<InstructorAuth/>}/>
          <Route path="/NavCandidate" element={<NavCandidate />} />
          <Route path="/UserDashboard" element={<NavCandidate><UserDashboard /></NavCandidate>} />
          <Route path="/UserCourses" element={<NavCandidate><UserCourses /></NavCandidate>} />
          <Route path="/UserLeaderboard" element={<NavCandidate><UserLeaderboard /></NavCandidate>} />
          <Route path="/UserSettings" element={<NavCandidate><UserSettings /></NavCandidate>} />
          <Route path="/UserHelpcenter" element={<NavCandidate><UserHelpcenter /></NavCandidate>} />

          <Route path="/NavAdmin" element={<NavAdmin/>} />
          <Route path="/InstructorDashboard" element={<NavAdmin><InstructorDashboard/></NavAdmin>}/>
          <Route path="/InstructorCourses" element={<NavAdmin><InstructorCourses/></NavAdmin>}/>
          <Route path="/InstructorDetails" element={<NavAdmin><InstructorDetails/></NavAdmin>}/>
          <Route path="/InstructorSettings" element={<NavAdmin><InstructorSettings/></NavAdmin>}/>
          <Route path="/Trainee" element={<NavAdmin><Trainee/></NavAdmin>}/>

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