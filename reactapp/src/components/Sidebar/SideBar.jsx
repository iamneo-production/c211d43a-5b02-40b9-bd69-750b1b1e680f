import React from "react";
import "./Sidebar.css";
import {   NavLink } from "react-router-dom";
import { FaAccusoft, FaAdn, FaBeer, FaFacebook } from 'react-icons/fa';


const SideBar = ({ children }) => {

  return (
    <>

      <body>
        <main>
        <header class="navbar">
    <a href="/Dashboard" class="navlogo">SPPUNNT</a>
    <div class="navlinkwrap">
      <span class="navlink selectedlink">Home</span>
      <span class="navlink">My Profile</span>
      <span class="navlink">Activity</span>
      <span class="navlink">How It Works</span>
    </div>
  </header>
          <aside className="menu">
            {/* <div className="avatar">
              <img
                className="thumb"
                src="https://avatars.githubusercontent.com/u/30212452"
                width="60"
                alt="Avatar"
              />
              <span className="name">@georgechond</span>
            </div> */}
            <nav className="primary">
              <ul>
                <li className="menu-item">
                  <NavLink
                    to="/Dashboard"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><FaAdn/></span>
                    <span className="desc">Dashboard</span>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/Courses"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><FaBeer/></span>
                    <span className="desc">Courses</span>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/Events"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><FaFacebook/></span>
                    <span className="desc">Events</span>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/Settings"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><FaAccusoft/></span>
                    <span className="desc">Settings</span>
                  </NavLink>
                </li>
                
                </ul>
                  
            </nav>
            {/* <span></span> */}
            <span className="expander iconoir-arrow-right"></span>
          </aside>
          <main>{children}</main>
        </main>
      </body>
    </>
  );
};

export default SideBar;
