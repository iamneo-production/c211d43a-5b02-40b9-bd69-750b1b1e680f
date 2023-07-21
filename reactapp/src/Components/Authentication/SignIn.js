import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic with username and password
    console.log('Username:', username);
    console.log('Password:', password);

    dash();
  };

  const navigate = useNavigate();

  const dash = () =>{
    navigate("/Dashboard")
  }

  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
          <img src="https://i.imgur.com/MYZd7of.png" alt="img" className="GroupImage" />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <div className="LogoContainer">
              <h1 className="logo">ACADEMIA</h1>
            </div>
            <header className="header">Log in</header>
            <header className="subHeader">Welcome Back!</header>

            <form onSubmit={handleSubmit}>
              <div className="txt_field">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  autoComplete="username"
                  required
                />
                <span></span>
                <label htmlFor="username">Username</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                  required
                />
                <span></span>
                <label htmlFor="password">Password</label>
              </div>
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="RememberMe" className="checkbox" />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
                <a href="/SignIn" className="ForgotPasswordLink">Forgot Password?</a>
              </div>
              <button type="submit" className="LoginButton">
                Login
              </button>
              <div className="signup_link">
                Create Account? <a href='/SignUp'>Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
