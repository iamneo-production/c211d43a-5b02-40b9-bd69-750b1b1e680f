import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavCandidate from "./Components/NavCandidate";

import Dashboard from "./Module/Candidate/Dashboard/Dashboard";
import Courses from "./Module/Candidate/Courses/Courses"
import Leaderboard from "./Module/Candidate/Leaderboard/Leaderboard"
import Settings from "./Module/Candidate/Settings/Settings"
import Helpcenter from "./Module/Candidate/HelpCenter/HelpCenter";


function App() {
  return (
    <>

    <Router>
      <NavCandidate>
        <Routes>

          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/Leaderboard" element={<Leaderboard/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Helpcenter" element={<Helpcenter/>}/>

        </Routes>
      </NavCandidate>
    </Router>

    </>
  );
}

export default App;
