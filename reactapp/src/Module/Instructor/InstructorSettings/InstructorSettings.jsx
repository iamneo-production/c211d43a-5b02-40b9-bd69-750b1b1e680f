import './InstructorSettings.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput, Flex } from '@mantine/core';


function InstructorSettings() {

  const [InstructorData, setInstructorData] = useState([]);
    // Function to fetch user data from the backend
  const fetchInstructorData = async () => {
    try {
      const response = await axios.get('https://8080-eebedaabaacaaeabaccffcffeaeaadbdbabf.project.examly.io/api/instructors/settings/2');
      setInstructorData(response.data);
    } catch (error) {
      console.error('Error fetching instructor data:', error);
    }
  };

  const updateInstructor = async (updatedData) => {
    try {
      const response = await axios.put('https://8080-eebedaabaacaaeabaccffcffeaeaadbdbabf.project.examly.io/api/instructors/settings/2', updatedData);
    } catch (error) {
      console.error('Error updating instructor data:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      await updateInstructor(InstructorData); // Pass the current InstructorData to the updateInstructor function
      close();
    } catch (error) {
      console.error('Error updating instructor data:', error);
    }
  };

  useEffect(() => {
    fetchInstructorData();
  }, []);

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className='main-container-settings' style={{display:Flex}}>
      <div className='settings-coverpage'>
        <picture>
          <img className='cover-page' src="https://www.guvi.in/build/images/user-profile-bg.d2b2824a59b2baf454ce8f4c7daedc87.svg" alt="Cover photo" />
        </picture>
        <div className='inside-main-settings' style={{display:Flex}}>
          <div className='profile-pic'>
            <picture className='user-img'>
              <img className='profile-pic' src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="Your image" />
            </picture>
          </div>
          <div className='username-settings' style={{display:Flex}}>
            <div className='mr-auto'>
            <h2 id='user-name' style={{color:'black'}}>{InstructorData.firstName + ' ' + InstructorData.lastName}</h2>
            </div>
            <Modal opened={opened} onClose={close} title="Profile Management" >
            <TextInput
              label="First name"
              placeholder="Your first name"
              value={InstructorData.firstName}
              onChange={(e) => setInstructorData({ ...InstructorData, firstName: e.target.value })}
            />
            <TextInput
              label="Last name"
              placeholder="Your last name"
              value={InstructorData.lastName}
              onChange={(e) => setInstructorData({ ...InstructorData, lastName: e.target.value })}
            />
            <TextInput
              label="Mobile"
              placeholder="Your mobile number"
              value={InstructorData.mobile}
              onChange={(e) => setInstructorData({ ...InstructorData, mobile: e.target.value })}
            />
            <TextInput
              label="Email"
              placeholder="Your Email"
              value={InstructorData.email}
              onChange={(e) => setInstructorData({ ...InstructorData, email: e.target.value })}
            />
            <TextInput
              label="Password"
              placeholder="Password"
              value={InstructorData.password}
              onChange={(e) => setInstructorData({ ...InstructorData, password: e.target.value })}
            />
            <Button onClick={handleSubmit}>Update details</Button>
            <Button onClick={close} style={{ backgroundColor: 'red', marginLeft: '10px' }}>Cancel</Button>
            </Modal>

            <Group position="center">
              <div onClick={open} className='edit-personal-details' style={{marginRight:'350px'}}>
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
                <h4>{InstructorData.email}</h4>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSettings