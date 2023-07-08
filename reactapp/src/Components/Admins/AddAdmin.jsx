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


    const navigate=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      postDataToServer(admin);
      console.log(admin);
    }

    const postDataToServer=(data)=>{
      axios.post(`${base_url}/admins`,data).then(
        (response)=>{
          console.log(response);
          console.log("Success");
          alert('Admin Created Successfully.')
          navigate('/');
        },(error)=>{
          console.log(error);
          console.log("Error")
          alert('Something Went Wrong.')
        }
      );
    }

  return (
    <div className="login-box">
    <h2>Create Instructor</h2>
    <form onSubmit={handleSubmit}>
      <div className="user-box">
        <input type="number" onChange={(e)=>{
          setAdmin({...admin,id:e.target.value})
        }}  />
        <label>ID</label>
      </div>
      <div className="user-box">
        <input type="text"  onChange={(e)=>{
          setAdmin({...admin,name:e.target.value})
        }} required />
        <label>Name</label>
      </div>
      <div className="user-box">
        <input type="text"   onChange={(e)=>{
          setAdmin({...admin,designation:e.target.value})
        }} required />
        <label>Designation</label>
      </div>
      <div className="user-box">
        <input type="text" onChange={(e)=>{
          setAdmin({...admin,description:e.target.value})
        }} required />
        <label>Description</label>
      </div>
      <div className="user-box">
        <input type="text" onChange={(e)=>{
          setAdmin({...admin,src:e.target.value})
        }} required />
        <label>Image src : </label>
      </div>
       <button type="submit" className="create_admin" >
       <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit</button>
        <Link to="/">
      <button className="mx-4 create_admin">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Back
      </button>
      </Link>
    </form>
  </div> 
  );
}
