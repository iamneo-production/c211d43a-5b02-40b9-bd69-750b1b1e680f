import React from 'react';
import AIImage from '../UserCourses/AllCourses/AIImage.jpg';
import "./UserCourses.css"
import { Button } from '@mantine/core';

export default function  Card({ele,ele1})
{
    return(

      <div className='en-course'>
      <div class="en-coursecard">
        <div class="en-courseimg">
          <img src="https://d12aarmt01l54a.cloudfront.net/cms/images/Media-20210413210046/808-440.png" alt="Course Image" />
          
        </div>
        <div class="en-coursedetails">
          <h2 class="en-coursetitle">{ele}</h2>
          <div class="en-enrollmentdetails">
            <p class="enrolled-started">{ele1}</p>
          </div>
          <Button className="enbtn" variant="gradient" gradient={{ from: 'green', to: 'cyan' }}>Enroll</Button>
        </div>
      </div>
    </div>

    )
}

