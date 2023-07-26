import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Create.css';
import base_url from "./api";
import axios from "axios";


export default function AddAdmin() {

  useEffect(()=>{
    document.title = "Add Instructor";
  },[]);

    const [admin, setAdmin] =useState({});
    // const token = localStorage.getItem('token');
    // console.log(token,"hi");


    const navigate=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      postDataToServer(admin);
      console.log(admin);
    }

    const postDataToServer=(data)=>{
      axios.post(`${base_url}/admins`,data).then(
        (response)=>{
          alert('Instructor Created Successfully.')
          navigate('/instructordetails');
        },(error)=>{
          console.log(error);
          console.log("Error")
          alert('Something Went Wrong.')
        }
      );
    }
  return (
    <div id="instructor_login-box">
    <div className="instructor_login-box">
    <h2>Create Admin</h2>
    <form onSubmit={handleSubmit} id="instructor_form">
      <div className="instructor_user-box">
        <input type="number" onChange={(e)=>{
          setAdmin({...admin,id:e.target.value})
        }}  />
        <label>ID</label>
      </div>
      <div className="instructor_user-box">
        <input type="text"  onChange={(e)=>{
          setAdmin({...admin,name:e.target.value})
        }} required />
        <label>Name</label>
      </div>
      <div className="instructor_user-box">
        <input type="text"   onChange={(e)=>{
          setAdmin({...admin,designation:e.target.value})
        }} required />
        <label>Designation</label>
      </div>
      <div className="instructor_user-box">
        <input type="text" onChange={(e)=>{
          setAdmin({...admin,description:e.target.value})
        }} required />
        <label>Description</label>
      </div>
      <div className="instructor_user-box">
        <input type="text" onChange={(e)=>{
          setAdmin({...admin,src:e.target.value})
        }} required />
        <label>Image src : </label>
      </div>
      <div id="instructor_action-button">
       <button type="submit" className="instructor_create_admin" >
       <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit</button>
        <Link to="/instructordetails">
      <button className="mx-4 instructor_create_admin">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Back
      </button>
      </Link>
      </div>
    </form>
  </div> 
  </div>
  );
}
