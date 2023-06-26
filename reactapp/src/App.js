import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import SidePanel from './SidePanel';
import StudentData from './StudentData';
import UserSettingsPage from './pages/UserSettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Navbar/>
      <div className="app-container">
        <SidePanel />
        <Routes>
        <Route path="/candidates" element={<StudentData />} />
        <Route path="/account-settings" element={<UserSettingsPage/>} />
        </Routes>
        <div className="main-content">
        
          <Routes>
            <Route path="/" element={<div>Welcome!</div>} />
            {/* Add more routes for other pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

