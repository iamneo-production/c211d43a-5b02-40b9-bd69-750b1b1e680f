import React from "react";

import { Link } from "react-router-dom";
function Navbar(){
  const logo='https://lh3.googleusercontent.com/pw/AIL4fc--v2jpMca1wBi25k4ObbRMlYwZnf5WvBudDTMLrky-2mAFjaL_xnHwv8s0Tr3I5cqJPpWPyXu--XkRJsoPMmWnDsadUFFEB6T7Z5vVbcZQs5AFt93y4PHMzI7IRNLNEyVl2yT_SymjgAQSSQ2jmB59GOorffOHu-16hgWLwz1jc86Zd9vlHWo3q6VKEMZkrmPxpY_rVXjD3xOH3ZVExmCD_Ox87wl9zic7KUZ6gaDDFiUgUvkkfztjHZ9JQt2uRe7x4Ykcc5nw_8A-PtXRT2YeuaAlmgx0lzbBvNHKmtGDvyWVu-4HJKcDTx0KLkCaWhslvykBoDe2Cg_OqCoIVnTjdnBgQB27BD7hVqJl3zBfcakKFM9J1s9YTrLnchGZppYkyexkPuZIsJnTXIY6wFYctvTnyjAeTuTeuUmpjxJ3WgaUFrlA98yt-_0KslRqyMcyzNdSzjZUT5LAUfK75Rimbf49ihZu9mm8z_2ZSmdLEMioYXXGbTNxRNYtx3Nc_v6MM9swzob2N6Fw3_cCmvF16WDMVmKjf_LjyMw-sr57B--SSaOdqdY5-izktt3xTdH6nt210cr0JkcxEKcXKx-VLYEmjbHS6K_bATaRoYSeZ-2m4qGK_WvQ45o8EIR_8LHOtckhKlUJ6X_KBjEJnQVPVz116oYY7B1FhoQVdqAv1VpAJpEOrFCWRywuZ2Q7sO0KdBhJ8t3LTILTgrR6qeD4H6EkbzyRRM3Q4zYgXI1ipR_7d5jqPuLuiWooxfHGjDjR7Xa6WY_r9jFLv5r4f3gi-4pI4sqloLcdFI7mPEPu-5cNNE93DzELkKcmq8cPHvdClLQL8-uHoKq947nsLLFEOc4rs3CB481FBdJuv6YQF3qw4f-7jkTAYcbYjXHxdiw5KAbrlW6DD2DL3xLlNf-H=w356-h355-s-no?authuser=0';
return(
    <div className="header" >
    <div className="container">

      <div className="overlay"></div>

      <a href="#" className="logo">
        <img src={logo} alt=""/>
      </a>
      

      <div className="menu-open-btn button" >
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      <nav className="navbar" data-navbar>

        <button className="menu-close-btn" data-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" alt="EduSmart logo"/>
          
        </a>

        <ul className="navbar-list">

          <li>
            <Link to="/Home" className="navbar-link">Home</Link>
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
           

          </li>

          <li>
            <Link to='/Aboutus' className="navbar-link">About</Link>
          </li>

          <li>
          <Link to='/Courses' className="navbar-link">Courses</Link>
          </li>

          <li>
            <Link to="/Instructor" className="navbar-link">Teachers</Link>
          </li>
          <li>
            <Link to="/Contact" className="navbar-link">Contact</Link>
          </li>

        </ul>

        <button className="btn btn-secondary">Get Started</button>

      </nav>

    </div>
  </div>

    );
}
export default Navbar;