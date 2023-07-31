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
import UserAssessment from "./Module/Candidate/UserAssessment/UserAssessment"
import UserEvents from "./Module/Candidate/UserEvents/UserEvents";
import EnrolledCourse from "./Module/Candidate/EnrolledCourse/EnrolledCourse"

import InstructorDashboard from "./Module/Instructor/InstructorDashboard/InstructorDashboard";
import InstructorCourses from "./Module/Instructor/InstructorCourses/InstructorCourses";
import InstructorLesson from './Module/Instructor/InstructorCourses/InstructorLesson';
// import InstructorDetails from "./Module/Instructor/InstructorDetails/InstructorDetails";
import InstructorSettings from "./Module/Instructor/InstructorSettings/InstructorSettings";
import Trainee from "./Module/Instructor/Trainee/Trainee";
import Assessment from './Module/Instructor/Assessment/Assessment';




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
import Chat from './Module/Chat/Chat';
import ChatRoom from './Module/Chat/ChatRoom';

import Admin from "./Module/Instructor/InstructorsDetails/Admin";
import AddAdmin from "./Module/Instructor/InstructorsDetails/AddAdmin";
import EditAdmin from "./Module/Instructor/InstructorsDetails/EditAdmin";
import Main from "./Components/LessonDetails/Main"

import UserLesson from './Module/Candidate/UserCourses/UserLesson';
import Quiz from './Module/Candidate/UserEvents/Quiz';
import ScorePage from './Module/Candidate/UserEvents/ScorePage';
import AdminEvent from './Module/Instructor/Events/AdminEvent';
import UserPayment from './Module/Candidate/UserPayment/UserPayment';
import UserPaySuccess from './Module/Candidate/UserPayment/UserPaySuccess';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Select" element={<Select />} />
          
          <Route path="/Auth" element={<Auth/>}/>
          <Route path="/InstructorAuth" element={<InstructorAuth/>}/>
          <Route path="/NavCandidate" element={<NavCandidate />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/UserCourses" element={<UserCourses />} />
          <Route path="/UserEvents" element={<UserEvents/>}/>
          <Route path='/quiz/:ida'  element={<Quiz />} />
          <Route path='/score/:finalans/:total' element={<ScorePage />} />
          <Route path="/UserAssessment" element={<UserAssessment/>}/>
          <Route path="/UserLeaderboard" element={<UserLeaderboard />} />
          <Route path="/UserSettings" element={<UserSettings />} />
          <Route path="/UserHelpcenter" element={<UserHelpcenter />} />
          <Route path="/EnrolledCourse" element={<EnrolledCourse/>}/>
          <Route path="/UserLesson/:a" element={<UserLesson />} />
           <Route path='/UserPayment' element={<UserPayment />} />
           <Route path="/UserPaySuccess" element={<UserPaySuccess />}  />


          <Route path="/NavAdmin" element={<NavAdmin/>} />
          <Route path="/InstructorDashboard" element={<NavAdmin><InstructorDashboard/></NavAdmin>}/>
          <Route path="/InstructorCourses" element={<NavAdmin><InstructorCourses/></NavAdmin>}/>
          <Route path="/InstructorLesson" element={<NavAdmin><InstructorLesson/></NavAdmin>}/>
          <Route path="/InstructorDetails" element={<NavAdmin><Admin/></NavAdmin>}/>
          <Route path="/InstructorSettings" element={<NavAdmin><InstructorSettings/></NavAdmin>}/>
          <Route path="/Trainee" element={<NavAdmin><Trainee/></NavAdmin>}/>
          <Route path="/Assessment" element={<NavAdmin><Assessment/></NavAdmin>}/>
          <Route path="/Events" element={<NavAdmin><AdminEvent /></NavAdmin>}/>
          

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
          <Route path='/ChatRoom' element={<ChatRoom/>}/>
          <Route path="/instructor/add" element={<AddAdmin />} />
          <Route path="/instructor/update/:adminid" element={<EditAdmin />} />
          <Route path='/lesson' element={<Main/>}/>
          <Route path='/Chat' element={<Chat/>}/>
        </Routes>
      </Router>
    </>
  );
}


export default App;