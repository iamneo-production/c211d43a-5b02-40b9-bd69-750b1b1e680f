import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  // Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
  // Card,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Nav(props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const navLinkStyle = {
    color: '#0c1e35', // Set the color for the NavLink label
    fontSize: '24px', // Set the font size for the NavLink label
    '&:hover': {
      backgroundColor: 'red'
    },
    
  };

  return (
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <AppShell
        style={{ width: '100%' }}
        navbarOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="sm"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 100, lg: 200 }}
            style={{
              background: 'white',
              color: 'white',
              overflowY:'auto'
            }}
          >
            <NavLink label="Dashboard" onClick={() => navigate('/InstructorDashboard')} style={navLinkStyle} />
            <NavLink label="Course" onClick={() => navigate('/InstructorCourses')} style={navLinkStyle} />
            <NavLink label="Lesson" onClick={() => navigate('/InstructorLesson')} style={navLinkStyle} />
              <NavLink label="Instructor" onClick={() => navigate('/InstructorDetails')} style={navLinkStyle} />
              <NavLink label="Candidate" onClick={() => navigate('/Trainee')} style={navLinkStyle} />
              <NavLink label="Settings" onClick={() => navigate('/InstructorSettings')} style={navLinkStyle} />
          </Navbar>
        }
        header={
          <Header height={60} p="md" style={{ backgroundColor: '#0c1e35' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[0]}
                  mr="xl"
                />
              </MediaQuery>
              <Text
                component="a"
                href="/"
                style={{
                  color: 'whitesmoke',
                  fontFamily: 'inherit',
                  fontWeight: 'bolder',
                  fontSize: '20px',
                  textAlign: 'left',
                  textIndent: '44px',
                  fontStyle: 'italic',
                }}
              >
                Academia
              </Text>
            </div>
          </Header>
        }
      >
        {props.children}
      </AppShell>
    </div>
  );
}
