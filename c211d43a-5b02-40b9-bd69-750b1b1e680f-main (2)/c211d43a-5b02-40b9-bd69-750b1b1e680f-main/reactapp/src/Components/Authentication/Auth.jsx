import React, { useState } from 'react';
import './Auth.css';
import { MdSpaceDashboard, MdOutlineMenuBook, MdCollectionsBookmark, MdLeaderboard } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie';



function App() {

  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: '',
    // role:'admin',
  });
  const [signUpFormData, setSignUpFormData] = useState({
    name:'',
    email: '',
    password: ''
  });

  const handleSignMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSignInChange = (e) => {
    setSignInFormData({
      ...signInFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUpChange = (e) => {
    setSignUpFormData({
      ...signUpFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    axios
    .post('https://8080-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/users/login', signInFormData)
    .then((resp) => {
      // console.log("Ji");
      // console.log(resp.data.userId);
      console.log(resp.data.token!==null);

      if (resp.data.token!==null) {
        let listvar = resp.data.token.role[0].authority;
        localStorage.setItem("token",resp.data.token.token);
        localStorage.setItem("id",resp.data.userId);

        console.log(resp.data.token);
        // console.log(resp.data.token.token);
        console.log(localStorage.getItem("id"));
        // console.log(signUpFormData.name);
        if (listvar === 'ROLE_USER' ) {
          navigate('/UserDashboard');
        } else if(listvar === 'ROLE_ADMIN') {
          navigate('/InstructorDashboard');
        }
      }
      else {
        // Auth failed
        alert("Invalid Credentials");
      }
      // console.log(resp.data);
    })
    .catch((err) => {
      // alert(err.response.data);
      alert("User not found")
    });
    
};
  
  

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    axios.post('https://8080-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/users/new', signUpFormData).then((response) => {
        alert("User Registered Successfully")
        setIsSignUpMode(!isSignUpMode)
     
    }).catch(err => {
      alert(err.response.data);
     
    });
  };

  const navigate = useNavigate();


  return (
    <div className={`auth-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">

          <form className="sign-in-form" onSubmit={ handleSignInSubmit} >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={signInFormData.email}
                onChange={handleSignInChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={signInFormData.password}
                onChange={handleSignInChange}
                required
              />
            </div>
            <input type="submit" value="Login" className="auth-btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/NavAuth" className="social-icon">
                <MdSpaceDashboard />
              </a>
              <a href="/NavAuth" className="social-icon">
                <MdOutlineMenuBook />
              </a>
              <a href="/NavAuth" className="social-icon">
                <MdLeaderboard />
              </a>
              <a href="/NavAuth" className="social-icon">
                <MdCollectionsBookmark />
              </a>
            </div>
          </form>



          <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={signUpFormData.name}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Lastname"
                name="lastName"
                value={signUpFormData.lastName}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signUpFormData.email}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={signUpFormData.password}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <input type="submit" value="Sign up" className="auth-btn" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <div className="social-icon">
                <MdSpaceDashboard />
              </div>
              <div className="social-icon">
                <MdOutlineMenuBook />
              </div>
              <div className="social-icon">
                <MdLeaderboard />
              </div>
              <div className="social-icon">
                <MdCollectionsBookmark />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="auth-panels-container">
        <div className="auth-panel left-auth-panel">
          <div className="auth-content">
            <h3>New here?</h3>
            <p>Tell me and I forget. Teach me and I remember. Involve me and I learn.
            </p>
            <button className="auth-btn transparent" id="sign-up-auth-btn" onClick={handleSignMode}>
              Sign up
            </button>
          </div>
          <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="auth-image" alt="" />
        </div>
        <div className="auth-panel right-auth-panel">
          <div className="auth-content">
            <h3>One of us?</h3>
            <p>
            The beautiful thing about learning is that nobody can take it away from you.
            </p>
            <button className="auth-btn transparent" id="sign-in-auth-btn" onClick={handleSignMode}>
              Sign in
            </button>
          </div>
          <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="auth-image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
