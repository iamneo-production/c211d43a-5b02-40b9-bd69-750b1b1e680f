import React, { useState, useEffect, useCallback } from 'react';
import "./InstructorCourses.css";
import axios from 'axios';
import { Button, Table, Modal, Input } from '@mantine/core';

function InstructorCourses() {
  const [popup, setPopup] = useState(false);
  const [pop2up, setPop2up] = useState(false);
  const [pop3up, setPop3up] = useState(false);
  const [CourseAdminDetails, setCourseAdminDetails] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/course')
      .then(response => {
        setCourseAdminDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, []);



  const handleCourseAdd = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const instructorId = document.getElementById('InstructorId').value;

    const data = {
      title: title,
      description: description,
      instructorId: instructorId,
    };

    axios.post('http://localhost:8080/course', data)
      .then(response => {
        setCourseAdminDetails([...CourseAdminDetails, response.data]);
        setPopup(false);
      })
      .catch(error => {
        console.error('Error adding new course', error);
      });
  };

  const handleSubmitUpdate = useCallback(async () => {
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const instructorId = document.getElementById('InstructorId').value;
  
    const updateItem = {
      id: id,
      title: title,
      description: description,
      instructorId: instructorId,
    };
  
    try {
      const response = await axios.put(`http://localhost:8080/course/${id}`, updateItem);
      setCourseAdminDetails(prevCourseAdminDetails => {
        const updatedCourseIndex = prevCourseAdminDetails.findIndex(course => course.id === id);
        if (updatedCourseIndex !== -1) {
          const updatedCourseAdminDetails = [...prevCourseAdminDetails];
          updatedCourseAdminDetails[updatedCourseIndex] = response.data;
          return updatedCourseAdminDetails;
        }
        return prevCourseAdminDetails;
      });

      const updatedCourseResponse = await axios.get('http://localhost:8080/course');
      setCourseAdminDetails(updatedCourseResponse.data);
  
      
      setPop2up(false);
    } catch (error) {
      console.error('Error updating course', error);
    }
  }, []);


  
  const handleDelete = () => {
    const id = document.getElementById('id').value;

    axios.delete(`http://localhost:8080/course/${id}`)
      .then(response => {
        console.log('Course deleted successfully');
        axios
          .get('http://localhost:8080/course')
          .then(resp => {
            setCourseAdminDetails(resp.data);
          })
          .catch(error => {
            console.error('Error fetching course details:', error);
          });
        setPop3up(false);
      })
      .catch(error => {
        console.error('Error deleting course', error);
      });
  };
  



  return (
    <div>
       <Button className='Addbutton' onClick={() => setPopup(true)}>Add Course</Button>
         <Button className='Updatebutton'onClick={()=> setPop2up(true)}>Update</Button>
         <Button className='Delbutton' onClick={()=>setPop3up(true)}>Delete</Button>
         

      <br />
      <br />
      <br />
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>instructorId</th>
          </tr>
        </thead>
        <tbody>
          {CourseAdminDetails.map((ele, index) => (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>{ele.description}</td>
              <td>{ele.instructorId}</td>
              <Button className="tableButton">Add Lesson</Button>
              <br />
              <br />
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal opened={popup} onClose={() => setPopup(false)} title="Add Course" className="courseaddmodal">
        <label>title</label>
        <Input placeholder="title" id="title" />
        <br />
        <label>description</label>
        <Input placeholder="description" id="description" />
        <br />
        <label>Instructor Id</label>
        <Input placeholder="instructorId" id="InstructorId" />
        <br />
        <Button onClick={handleCourseAdd}>submit</Button>
      </Modal>

      <Modal opened={pop2up} onClose={() => setPop2up(false)} title="Update" className="courseaddmodal">
        <label>Id</label>
        <Input placeholder="id" label="id" id="id" />
        <br />
        <label>title</label>
        <Input placeholder="title" id="title" />
        <br />
        <label>description</label>
        <Input placeholder="description" id="description" />
        <br />
        <label>Instructor ID</label>
        <Input placeholder="instructorid" id="InstructorId" />
        <br />
        <Button onClick={handleSubmitUpdate}>submit</Button>
      </Modal>

      <Modal opened={pop3up} onClose={() => setPop3up(false)} title="Delete" className="courseaddmodal">
        <label>Id</label>
        <Input placeholder="id" label="id" id="id" />
        <br />
        <Button className='delbut' onClick={handleDelete}>Delete</Button>
      </Modal>
    </div>
  );
}

export default InstructorCourses;