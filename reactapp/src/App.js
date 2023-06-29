import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Courses from "./pages/courses/Courses.jsx"
import Events from "./pages/events/Events.jsx"
import Settings from "./pages/settings/Settings.jsx"


function App() {
  return (
    <>

    <Router>
      <SideBar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Settings" element={<Settings/>}/>

          {/* <Route path="*" element={<> not found</>} /> */}
        </Routes>
      </SideBar>
    </Router>

    </>
  );
}

export default App;
