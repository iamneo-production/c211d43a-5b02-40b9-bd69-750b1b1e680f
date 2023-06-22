import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginValidation from './LoginValidation';
import Navbar from './Navbar';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = LoginValidation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <Navbar />;
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign in</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              onChange={handleInput}
              className='form-control rounded-0'
              name='email'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={handleInput}
              className='form-control rounded-0'
              name='password'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <Link to='/Navbar' className='btn btn-success w-100 rounded-0'>
            <strong>Log in</strong>
          </Link>
          <Link
            to='/Signup'
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
