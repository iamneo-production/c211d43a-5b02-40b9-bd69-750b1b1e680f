import React from 'react';
import AIImage from '../UserCourses/AllCourses/AIImage.jpg';
import "./UserCourses.css"

export default function  Card({ele})
{
    return(

<div>


<div className="card">



    <img src= {AIImage} height={'130px'} width={'178px'}/> 
    <h1>{ele}</h1>
 
     <div> <h2 className='courseLearn'>Learn Now</h2> 
     <h2 className='courseLang'>english</h2>
    </div>
    
  </div> 
  <br></br>
  </div>
    )
}

