import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavCandidate.css";
import { Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { TbHelpCircle } from 'react-icons/tb';

function NavCandidate()
{

  
const navigate=useNavigate()

const dashboard =()=>{
  navigate("/UserDashboard")
}

const courses =()=>{
  navigate("/UserCourses")
}

const events =()=>{
  navigate("/UserEvents")
}

const assessment =()=>{
  navigate("/UserAssessment")
}

const helpCenter=()=>{
  navigate("/UserHelpCenter")
}


  return (
    <>
        
        <header className="sa-navbar">
    <a href="/Dashboard" className="navlogo">ACADEMIA</a>
    <div class="navlinkwrap">
  <span class="navlink" onClick={dashboard}>Home</span>
  <span class="navlink" onClick={courses}>Courses</span>
  <div class="dropdown">
    <span class="navlink"  onClick={events}>Events</span>
    <div class="dropdown-content">
      <a href="/UserEvents"> Events</a>
      <a href="/UserDashboard">MyEvents</a>
      {/* <a href="#">Option 3</a> */}
    </div>
  </div>
  <span class="navlink" onClick={assessment}>Assessments</span>
</div>
<div class="nav-profile">
 
  <Menu shadow="md" width={200}>
<Menu.Target>
<UnstyledButton className="unStyledbtn">
<Group>
  {/* <Avatar size={40} color="blue">BH</Avatar> */}
  <div className="help-icon" ><TbHelpCircle size={20} onClick={helpCenter} /></div>
  <div>
    <Text className="txt-head">Bob Handsome</Text>
    {/* <Text size="xs" color="dimmed">bob@handsome.inc</Text> */}
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
</div>
 </header>
 
    </>
  );
};

export default NavCandidate;

