import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Select from "./Components/Landing/Select";
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import NavCandidate from "./Components/NavCandidate";
import NavAdmin from "./Components/NavAdmin"

import Dashboard from "./Module/Candidate/Dashboard/Dashboard";
import Courses from "./Module/Candidate/Courses/Courses";
import Leaderboard from "./Module/Candidate/Leaderboard/Leaderboard";
import Settings from "./Module/Candidate/Settings/Settings";
import Helpcenter from "./Module/Candidate/HelpCenter/HelpCenter";

import InstructorDashboard from "./Module/Instructor/InstructorDashboard/InstructorDashboard";
import InstructorCourses from "./Module/Instructor/InstructorCourses/InstructorCourses"
import Instructors from "./Module/Instructor/Instructors/Instructors"
import InstructorSettings from "./Module/Instructor/InstructorSettings/InstructorSettings"
import Trainee from "./Module/Instructor/Trainee/Trainee"


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
        </Routes>
      </Router>
    </>
  );
}

export default App;
