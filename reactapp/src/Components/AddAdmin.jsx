import React, { useState } from "react";
// import Form from "./Form";
import { Link, useNavigate } from "react-router-dom";
import './create.css';

export default function AddAdmin() {


    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[designation,designationchange]=useState("");
    const[description,descriptionchange]=useState("");
    const[src,srcchange]=useState("");


    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = {name,designation,description,src};
        // console.log({id,name,designation,description,src});

        fetch("http://localhost:8000/admins",{
            method:"POST",
            headers:{"content-type":"application/json"},

            body:JSON.stringify(data)
        }).then((res)=>{
            alert('Admin Created Successfully.')
            navigate('/');
            
        }).catch((err)=>{
            console.log(err.message)
        })

    }
  return (
    <div className="login-box">
    <h2>Create Admin</h2>
    <form onSubmit={handleSubmit}>
      <div className="user-box">
        <input type="number" value={id} disabled="disabled" name="" required="" />
        <label>ID</label>
      </div>
      <div className="user-box">
        <input type="text" value={name}  onChange={e=>namechange(e.target.value)} required />
        <label>Name</label>
      </div>
      <div className="user-box">
        <input type="text" value={designation}  onChange={e=>designationchange(e.target.value)} required />
        <label>Designation</label>
      </div>
      <div className="user-box">
        <input type="text" value={description} onChange={e=>descriptionchange(e.target.value)} required />
        <label>Description</label>
      </div>
      <div className="user-box">
        <input type="text" value={src}  onChange={e=>srcchange(e.target.value)} required />
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
