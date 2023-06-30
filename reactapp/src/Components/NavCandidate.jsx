import React from "react";
import "./NavCandidate.css";
import {   NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdSpaceDashboard,MdOutlineMenuBook,MdCollectionsBookmark,MdLeaderboard,MdSettings,MdHelp } from "react-icons/md";
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';



const NavCandidate = ({ children }) => {

  return (
    <>

      <body>
        <main>
        <header class="navbar">
    <a href="/Dashboard" class="navlogo">ACADEMIA</a>
    <div class="navlinkwrap">
      <span class="navlink">
      
      <Group position="right" className="profile">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src={BsPersonCircle} alt="img" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src={BsPersonCircle} radius="xl" />
            <Stack spacing={5}>
              <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="#"
                color="dimmed"
                size="xs"
                sx={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" spacing="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>

      </span>
    </div>
  </header>
          <aside className="menu">
            <nav className="primary">
              <ul>
                <li className="menu-item">
                  <NavLink
                    to="/Dashboard"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdSpaceDashboard/></span>
                    <span className="desc">Dashboard</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/Courses"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdOutlineMenuBook/></span>
                    <span className="desc">Courses</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/Courses"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdCollectionsBookmark/></span>
                    <span className="desc">MyCourses</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/Leaderboard"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdLeaderboard/></span>
                    <span className="desc">Leaderboard</span>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    to="/Settings"
                    activeClassName="active-menu-item"
                    className="menu-item"
                  >
                    <span className="icon"><MdSettings/></span>
                    <span className="desc">Settings</span>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/HelpCenter"
                    activeClassName="active-menu-item"
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
        </main>
      </body>
    </>
  );
};

export default NavCandidate;
