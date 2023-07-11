import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavCandidate from "./Components/NavCandidate";
import Dashboard from "./Module/Candidate/Dashboard/Dashboard";
import Courses from "./Module/Candidate/Courses/Courses";
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
import Contact from './pages/Contact'; // Make sure to import the Contact component
import Instructor from './pages/Instructor'; // Make sure to import the Instructor component

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Helpcenter" element={<Helpcenter />} />
          <Route path="/InstructorDashboard" element={<InstructorDashboard />} />
          <Route path="/InstructorCourses" element={<InstructorCourses />} />
          <Route path="/Instructors" element={<Instructors />} />
          <Route path="/InstructorSettings" element={<InstructorSettings />} />
          <Route path="/Trainee" element={<Trainee />} />

          <Navbar />
          <Route path="/About" element={<About />} />
          <Route path="/Coursedisplay" element={<Coursedisplay />} />
          <Route path="/Topcourse" element={<Topcourse />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Ctc" element={<Ctc />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Instructor" element={<Instructor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
