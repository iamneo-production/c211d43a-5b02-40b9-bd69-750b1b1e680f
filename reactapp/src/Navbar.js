import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Styles.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className="nav-link"
              activeClassName="active"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin"
              className="nav-link"
              activeClassName="active"
            >
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/trainer"
              className="nav-link"
              activeClassName="active"
            >
              Trainer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/candidates"
              className="nav-link"
              activeClassName="active"
            >
              Candidates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/courses"
              className="nav-link"
              activeClassName="active"
            >
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/account-settings"
              className="nav-link"
              activeClassName="active"
            >
              Account Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="search-bar">
          <input
            className="form-control rounded-pill search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      <div className="ml-auto">
        <Link to="/" className="btn btn-danger">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
