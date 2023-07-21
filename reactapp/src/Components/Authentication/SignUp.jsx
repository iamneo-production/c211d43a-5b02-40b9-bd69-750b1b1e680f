import React, { useState } from 'react';
import './SignUp.css';
import reg2 from "./Assets/reg2.png"
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Handle form submission logic here

    signin();
  };

  const navigate = useNavigate();

  const signin = () => {
    navigate('/SignIn');
  };

  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer-1">
          <img src={reg2} alt="img" className="GroupImage" />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <header className="header">SignUp</header>
            <header className="subHeader">
              Welcome to <b>Academia!</b> Please Enter your Details
            </header>

            <form onSubmit={handleSubmit}>
              <div className="content">
                <div className="txt_field-1">
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                    autoComplete="given-name"
                  />
                  <span></span>
                  <label>First name</label>
                </div>
                <div className="txt_field-1">
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                    autoComplete="family-name"
                  />
                  <span></span>
                  <label>Last name</label>
                </div>
              </div>
              <div className="txt_field-1">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  autoComplete="email"
                />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field-1">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="new-password"
                />
                <span></span>
                <label>Password</label>
              </div>

              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="RememberMe"
                    className="checkbox"
                  />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
              </div>
              <button type="submit" className="LoginButton-1">
                SignUp
              </button>
              <div className="signup_link">
                Already have an account? <a href="/SignIn">SignIn</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
