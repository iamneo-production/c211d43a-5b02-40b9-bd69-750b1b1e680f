import React from 'react';
import "./UserCourses.css"
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Card({ ele2, ele, ele1 }) {
  const nav = useNavigate();

  function handleNavigate(a) {
    localStorage.setItem("courseid", a);
    nav(`/UserLesson/${a}`);
  }

  return (
    <div className='en-course'>
      <div className="en-coursecard">
        <div className="en-courseimg">
          <img src="https://d12aarmt01l54a.cloudfront.net/cms/images/Media-20210413210046/808-440.png" alt="Course Image" />
        </div>
        <div className="en-coursedetails">
          <h2 className="en-coursetitle">{ele}</h2>
          <div className="en-enrollmentdetails">
            <p className="enrolled-started">{ele1}</p>
          </div>
          <Button className="enbtn" onClick={() => handleNavigate(ele2)} variant="gradient" gradient={{ from: 'green', to: 'cyan' }}>Enroll</Button>
        </div>
      </div>
    </div>
  );
}
