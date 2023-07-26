import React, { useState, useEffect } from 'react';
import './InstructorDashboard.css';
import { Link } from 'react-router-dom';
import { FaMedal, FaGraduationCap, FaBookReader } from 'react-icons/fa';
import EventUpdateBanner from './EventUpdateBanner';

const Listing = () => {
    const enrolledStudents = [
        { id: 1, name: 'Manish', email: 'johndoe@example.com', avatar: 'https://img.freepik.com/premium-photo/portrait-attractive-curly-business-lady-toothy-beaming-smiling-good-morning-mood-ready-start-working-wear-formalwear-yellow-shirt_274222-20422.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais' },
        { id: 2, name: 'Smith', email: 'janesmith@example.com', avatar: 'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais' },
        { id: 1, name: 'Pradeep', email: 'johndoe@example.com', avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.1.1383474551.1689404268&semt=ais' },
        { id: 2, name: 'Shree', email: 'janesmith@example.com', avatar: 'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais' },
        // Add more enrolled students data
      ];
    
    
      const eventUpdates = [
        {
          title: 'Update 1',
          description: 'This is the first event update.',
        },
        {
          title: 'Update 2',
          description: 'This is the second event update.',
        },
        {
          title: 'Update 3',
          description: 'This is the third event update.',
        },
        // Add more update objects as needed
      ];
      const courses = [
        {
          title: "Phyton Programing",
          description: "This is course 1 description.",
          image: "https://img.freepik.com/premium-photo/python-inscription-text-against-laptop-code-background-learn-python-programming-language_488220-61295.jpg?size=626&ext=jpg&ga=GA1.1.1383474551.1689404268&semt=ais"
        },
        {
          title: "Artificial Intelligence",
          description: "This is course 2 description.",
          image: "https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-6378.jpg?size=626&ext=jpg&ga=GA1.1.1383474551.1689404268&semt=ais",
        },
        {
          title: "Soft Skills",
          description: "This is course 3 description.",
          image: "https://img.freepik.com/free-photo/improvement-summary-personal-development-workflow_53876-125155.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais",
        }
      ];
    
      
    
      return (
        <div>
        
        <div className="instructor-dashboard">
         
         
         
          <div className="demo-info">
  <div className="demo-section">
    <h2>Enrolled Students</h2>
    <div className="student-list">
      {enrolledStudents.map((student) => (
        <div className="student" key={student.id}>
          <img src={student.avatar} alt="Student Avatar" />
          <div className="student-info">
            <h4>{student.name}</h4>
            <p>{student.email}</p>
          </div>
          <div className="student-actions">
            <button className="btn-view-profile">View Profile</button>
            <button className="btn-unenroll">Unenroll</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="new-courses-section">
  <h2>Newly Launched Courses</h2>
  <div className="courses-container">
    {courses.map((course, index) => (
      <div key={index} className="course-card">
        <div className="image-container">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-details">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <div className="button-container">
            <span className="enroll-icon">
              <i className="fas fa-graduation-cap"></i> Enroll
            </span>
            
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



            
          </div>
          </div>
        
  );
};

export default Listing;
