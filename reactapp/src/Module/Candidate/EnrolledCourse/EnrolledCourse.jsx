import React,{ useState,useEffect }  from 'react'
import axios from "axios";
// import { useState,useEffect } from "react";
import "./EnrolledCourse.css"
import { Button } from '@mantine/core';

function EnrolledCourses(){
    
    const[myCourse,setMyCourse]=useState([]);
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    console.log(token,"hi");
    const url = `https://8080-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/users/${id}`;
    useEffect(()=>{
        axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then((resp) => {
            setMyCourse(resp.data);
            console.log(resp.data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
    },[])

    
    if(myCourse.length===0){
        return(
            <div className="sa-enrolled">
            <h2 className="sa-en">No Courses Enrolled!</h2>
            </div>
        );
    }
    else{
    return(
        <>


<div className="en">
{myCourse.map((course) => (


<div  >

     <div className='en-course'>
            <div class="en-coursecard">
              <div class="en-courseimg">
                <img src="https://www.cnet.com/a/img/resize/57a63a76cfa45a7cdb89c55d3cc7b7ae5f6b2e20/hub/2023/04/02/f43d763f-af43-42c5-b413-c34890a8496a/product-327707-product-shot-wide.jpg?auto=webp&fit=crop&height=675&width=1200" alt="Course Image" />
                
              </div>
              <div class="en-coursedetails">
                <h2 class="en-coursetitle">{course.title}</h2>
                <div class="en-enrollmentdetails">
                  <p class="enrolled-started">{course.description}</p>
                </div>
               <div> <Button className="enbtn" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Continue</Button></div>
              </div>
             
            </div>
          </div>

          </div>
           
           ))} 
        </div>


    </>
    );
}
}

export default EnrolledCourses