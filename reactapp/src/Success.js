import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Success!</h2>
        <p>Your account is successfully registered.</p>
        <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Success;
