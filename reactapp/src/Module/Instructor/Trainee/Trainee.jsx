import React, { useEffect, useState } from "react";
import "./Trainee.css";
import Card from "./Card";
// import trainee from "./data";
import base_url from "./api";
import axios from "axios";

export default function Trainee() {
  const [traineeData, traineeDataChange] = useState(null);

  const getAllTrainee=()=>{
      axios.get(`${base_url}/trainee`).then(
        (response)=>{
          console.log(response);
          traineeDataChange(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )
  }

  useEffect(()=>{
    document.titile ="Candidate Dashboard";
    getAllTrainee();
  },[]);


  return (
    <div id="Trainee-Body">
      <div id="Trainee">
        {traineeData && traineeData.map((e,index)=>{
          return (
            <div key={index}>
                <Card 
                data={e}
                />
              </div>
          )
        })}
      </div>
      {/* <div id="add">
      <i className="fa-solid fa-circle-plus fa-2xl" id="addIcon" style={{color: "#26b3b5"}}></i>
      </div> */}
    </div>
  );
}
