import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
import "./InstructorAuth.css"

function InstructorAuth() {
  const [adminLogin, setAdminLogin] = useState({
    email: '',
    password: '',
    role:'admin',
  });

  const handleChange = (e) => {
    setAdminLogin({
      ...adminLogin,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  // const handleAdminLoginSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post('http://localhost:8080/users/login', adminLogin)
  //     .then((resp) => {
  //       if (resp.data !== "Auth Failed") {
  //         // Auth successful
  //         Cookies.set("token", resp.data);
  //         navigate('/InstructorDashboard');
  //       } else {
  //         // Authentication failed
  //         alert("Permission Denied");
  //       }

  //     })
  //     .catch((err) => {
  //       alert(err.response.data);
  //     });
  // };
  

  return (
    <div className="ad-container">
      <div className="login-1" /**onSubmit={handleAdminLoginSubmit}**/>
        <div className="ad-form">
          <p style={{ color: "#0c1e35", marginBottom: "20px" }}>Welcome Admin</p>
        
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={adminLogin.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={adminLogin.password}
              onChange={handleChange}
              required
            />

            <button>Login</button>
      
        </div>
      </div>
    </div>
  );
}

export default InstructorAuth;
