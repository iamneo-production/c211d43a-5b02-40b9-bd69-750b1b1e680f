import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Select from "./Components/Landing/Select";
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import NavCandidate from "./Components/NavCandidate";
import NavAdmin from "./Components/NavAdmin";

import Dashboard from "./Module/Candidate/Dashboard/Dashboard";
import Leaderboard from "./Module/Candidate/Leaderboard/Leaderboard";
import Settings from "./Module/Candidate/Settings/Settings";
import Helpcenter from "./Module/Candidate/HelpCenter/HelpCenter";

import InstructorDashboard from "./Module/Instructor/InstructorDashboard/InstructorDashboard";
import InstructorCourses from "./Module/Instructor/InstructorCourses/InstructorCourses";
import Instructors from "./Module/Instructor/Instructors/Instructors";
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
import Contact from './pages/Contact';
import Instructor from './pages/Instructor';

import Admin from "./Components/Admins/Admin";
import AddAdmin from "./Components/Admins/AddAdmin";
import EditAdmin from "./Components/Admins/EditAdmin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Select" element={<Select />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />

          <Route path="/NavCandidate" element={<NavCandidate />} />
          <Route path="/Dashboard" element={<NavCandidate><Dashboard /></NavCandidate>} />
          <Route path="/Courses" element={<NavCandidate><Courses /></NavCandidate>} />
          <Route path="/Leaderboard" element={<NavCandidate><Leaderboard /></NavCandidate>} />
          <Route path="/Settings" element={<NavCandidate><Settings /></NavCandidate>} />
          <Route path="/Helpcenter" element={<NavCandidate><Helpcenter /></NavCandidate>} />

          <Route path="/NavAdmin" element={<NavAdmin/>} />
          <Route path="/InstructorDashboard" element={<NavAdmin><InstructorDashboard/></NavAdmin>}/>
          <Route path="/InstructorCourses" element={<NavAdmin><InstructorCourses/></NavAdmin>}/>
          <Route path="/Instructors" element={<NavAdmin><Instructors/></NavAdmin>}/>
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

          <Route path="/" element={<Admin />} />
          <Route path="/admin/add" element={<AddAdmin />} />
          <Route path="/admin/edit/:adminid" element={<EditAdmin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
