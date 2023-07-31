import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./main.css";
import { Link } from "react-router-dom";
import base_url from "./api"
import axios from "axios";
// import admin from "./Data";

// change admin to admindata for connection to backend

// const token = localStorage.getItem('token');
//     console.log(token,"hi");

// ,{
//   headers: {
//  'Authorization': `Bearer ${token}`
// }}


export default function Admin() {
  const [admindata, admindatachange] = useState(null);
  

  const getAllAdmins=()=>{
    axios.get(`${base_url}/admins`).then(
      (response)=>{
        //succcess
        console.log(response);
        admindatachange(response.data);
      },
      (error)=>{
        //for error
        console.log(error);
      }
    )
  };

  useEffect(()=>{
    document.title = "Instructor Dashboard"
    getAllAdmins();
  },[]);

  const updateAdmin=(id)=>{
    admindatachange(admindata.filter((c) => c.id !== id))
  };

  const [text, setText] = useState("false");
  const [bId, setBId] = useState(null);

  const btnClick = (id) => {
    if (text === "false") {
      setBId(id);
      setText("true");
    } else if (id !== bId && text === "true") {
      setText("false");
      setBId(id);
      setText("true");
    } else {
      setText("false");
      setBId(null);
    }
  };

  return (
    <div id="instructor">
      <section id="instructor-section">
        <div className="instructor-container flow-content">
          <h2 className="section-title">Instructor Details</h2>
          <ul role="list" className="grid" data-columns="3">
            {admindata &&
              admindata.map((e, index) => {
                return (
                  <div key={index}>
                    <Card
                      data={e}
                      bid={bId}
                      text={text}
                      id={e.id}
                      btnClick={btnClick}
                      update={updateAdmin}
                    />
                  </div>
                );
              })}
          </ul>
          <div className="card" id="addcard" >
            <div data-card="front" className="card__front flow-content">
              <Link to="/instructor/add" style={{transform: "scale(1)"}}>
                <button className="Custom_add_button">
                  <i className="fa-solid fa-plus card__toggle-icon"></i>
                </button>
              </Link>
              <p className="card__name" style={{ marginTop: "4rem"}}>
                Add Instructor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
