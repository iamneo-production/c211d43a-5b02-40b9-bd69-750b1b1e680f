import React from "react";
import "./NavCandidate.css";
import {   NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdSpaceDashboard,MdOutlineMenuBook,MdCollectionsBookmark,MdLeaderboard,MdSettings,MdHelp } from "react-icons/md";
// import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';
import { Menu, Text } from '@mantine/core';
import { UnstyledButton, Group, Avatar } from '@mantine/core';
// import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';




const NavCandidate = ({ children }) => {

  return (
    <>
        
        <header className="can-navbar">
    <a href="/UserDashboard" className="navlogo">ACADEMIA</a>
    <div className="navlinkwrap">
      <span className="navlink">
      

      <Menu shadow="md" width={200}>
      <Menu.Target>
      <UnstyledButton className="unStyledbtn">
      <Group>
        <Avatar size={40} color="blue">BH</Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text size="xs" color="dimmed">bob@handsome.inc</Text>
        </div>
      </Group>
    </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label> */}
        <Menu.Item  >Profile</Menu.Item>
        <Menu.Item  >Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>

      </span>
    </div>
  </header>
  <main>
  <div style={{display:"flex"}}>
          <aside className="menu">
            <nav className="primary">
              <ul>
                <li className="menu-item">
                  <NavLink
                    to="/UserDashboard"
                    activeclassname="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdSpaceDashboard/></span>
                    <span className="desc">Dashboard</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/UserCourses"
                    activeclassname="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdOutlineMenuBook/></span>
                    <span className="desc">Courses</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/UserCourses"
                    activeclassname="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdCollectionsBookmark/></span>
                    <span className="desc">MyCourses</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/UserLeaderboard"
                    activeclassname="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdLeaderboard/></span>
                    <span className="desc">Leaderboard</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/UserSettings"
                    activeclassname="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdSettings/></span>
                    <span className="desc">Settings</span>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/UserHelpCenter"
                    activeclassname="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdHelp/></span>
                    <span className="desc">HelpCenter</span>
                  </NavLink>
                </li>
                
                </ul>
                  
            </nav>
            {/* <span></span> */}
            <span className="expander iconoir-arrow-right"></span>
          </aside>
          <main>{children}</main>
          </div>
        </main>
    </>
  );
};

export default NavCandidate;
