import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import SidePanel from './SidePanel';
import StudentData from './StudentData';
import UserSettingsPage from './pages/UserSettingsPage';
import UserManagement from './components/user/UserManagement';
import Enrollments from './components/user/Enrollments';
import PaymentInformation from './components/user/PaymentInformation';
import Preferences from './components/user/Preferences';
import AccountDeletion from './components/user/AccountDeletion';

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
        <Route path="/account-settings/user-management" element={<UserManagement/>} />
        <Route path="/account-settings/enrollments" element={<Enrollments/>} />
        <Route path="/account-settings/payment-information" element={<PaymentInformation/>} />
        <Route path="/account-settings/preferences" element={<Preferences/>} />
        <Route path="/account-settings/account-deletion" element={<AccountDeletion/>} />
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

