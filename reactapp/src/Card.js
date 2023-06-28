import React, { Component } from 'react';

import "../src/CourseList.css";

export default function  Card({ele})
{
    return(

<div>


<div className="card">



    <img src= {ele.image} height={'130px'} width={'235px'}/>
    <h1>{ele.CourseName}</h1>
 
     <div> <h2 className='courseLearn'>Learn Now</h2> 
     <h2 className='courseLang'>english</h2>
    </div>
    
  </div> 
  <br></br>
  </div>
    )
}


