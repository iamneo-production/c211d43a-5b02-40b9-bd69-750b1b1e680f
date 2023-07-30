import React, { useEffect } from 'react';
import AIImage from '../UserCourses/AllCourses/AIImage.jpg';
import "./UserCourses.css";
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Card({ ele2, ele, ele1 }) {
  const nav = useNavigate();

  useEffect(() => {
    localStorage.setItem("courseid", ele2);
  }, [ele2]);

  return (
    <div className='en-course'>
      <div className="en-coursecard">
        <div className="en-courseimg">
          <img src={AIImage} alt="Course Image" />
        </div>
        <div className="en-coursedetails">
          <h2 className="en-coursetitle">{ele}</h2>
          <div className="en-enrollmentdetails">
            <p className="enrolled-started">{ele1}</p>
          </div>
          <Button
            className="enbtn"
            onClick={() => {
              nav(`/UserLesson/${ele2}`);
            }}
            variant="gradient"
            gradient={{ from: 'green', to: 'cyan' }}
          >
            Enroll
          </Button>
        </div>
      </div>
    </div>
  );
}
