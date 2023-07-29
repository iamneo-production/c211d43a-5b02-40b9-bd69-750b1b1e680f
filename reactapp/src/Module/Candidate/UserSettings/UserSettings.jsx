import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserSettings.css';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput } from '@mantine/core';
import axios from 'axios';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput } from '@mantine/core';
import NavCandidate from '../../../Components/NavCandidate';


function UserSettings() {
  const [userData, setUserData] = useState([]);
  // Function to fetch user data from the backend
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/settings/1');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  const updateUser = async (updatedData) => {
    try {
      const response = await axios.put('http://localhost:8080/api/users/settings/1', updatedData);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };


  const handleSubmit = async () => {
    try {
      await updateUser(userData); // Pass the current userData to the updateUser function
      close();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  

  useEffect(() => {
    fetchUserData();
  }, []);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <NavCandidate/>
    <div className='main-container-settings'>
      <div className='settings-coverpage'>
        <picture>
          <img className='cover-page' src="https://www.guvi.in/build/images/user-profile-bg.d2b2824a59b2baf454ce8f4c7daedc87.svg" alt="Cover photo" />
        </picture>
        <div className='inside-main-settings'>
          <div className='profile-pic'>
            <picture className='user-img'>
              <img className='profile-pic' src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="Your image" />
            </picture>
          </div>
          <div className='username-settings'>
            <div className='mr-auto'>
            <h2 id='user-name' style={{color:'black'}}>{userData.firstName + ' ' + userData.lastName}</h2>
            </div>
            <Modal opened={opened} onClose={close} title="Profile Management" >
            <TextInput
              label="First name"
              placeholder="Your first name"
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            />
            <TextInput
              label="Last name"
              placeholder="Your last name"
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            />
            <TextInput
              label="Mobile"
              placeholder="Your mobile number"
              value={userData.mobile}
              onChange={(e) => setUserData({ ...userData, mobile: e.target.value })}
            />
            <TextInput
              label="Email"
              placeholder="Your Email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <TextInput
              label="Password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
            <Button onClick={handleSubmit}>Update details</Button>
            <Button onClick={close} style={{ backgroundColor: 'red', marginLeft: '10px' }}>Cancel</Button>
            </Modal>

            <Group position="center">
              <div onClick={open} className='edit-personal-details'>
              <a onClick={open} className='edit-btn-settings'>
                <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Compose-512.png" />
              </a>
            </div>
            </Group>
          </div>
            <div className='profile-email'>
              <div className='email-head'>
                <div className='align-items-center'>
                  <p>Email ID</p>
                  <p className='private-to-you'></p>
                </div>
                <h4>{userData.email}</h4>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserSettings