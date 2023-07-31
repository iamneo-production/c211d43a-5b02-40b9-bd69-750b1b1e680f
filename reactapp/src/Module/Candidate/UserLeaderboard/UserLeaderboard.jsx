import NavCandidate from '../../../Components/NavCandidate';
import React, { useEffect, useState } from "react";
import './UserLeaderboard.css'
import axios from "axios";
import base_url from "./api";
import card from './cardData';
import tabledata from './tableData';

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"></link>


export default function Leaderboard() {

  const [leaderboard , setLeaderboard] = useState([]);

  const LoadData = () =>{
    axios.get(`${base_url}/userleaderboard`).then(
      (respose)=>{
        console.log(respose);
          setLeaderboard(respose.data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  useEffect(()=>{
    LoadData();
  },[])

  const card = leaderboard.slice(0,3);
  const tabledata = leaderboard.slice(3);
    return (

        <div>
            <NavCandidate/>
            <div>
      <div className="App">
        <div className="page_wrape">
          {/*  <!---main content--> */}

          <div className="lmain-content">
            <div className="info-card">
                {card.map((e,index) => {
                    return (
                        <div className="card" key={index}>
                <div className="card-icon">
                  <span>
                    <i className="fa fa-trophy"></i>
                  </span>
                </div>
                <div className="card-detail">
                  <h2>{e.score}</h2>
                  <h4>{e.name}</h4>
                </div>
                <p>{e.location}</p>
              </div>

                    );
                })}
            </div>
            <div className="lmain-table">
              <div className="title">
                <h2>All Users</h2>
                <div className="user_table">
                  <table>
                    <thead>
                      <tr>
                        <td>Names</td>
                        <td>Score</td>
                        <td>Email</td>
                        <td>Location</td>
                        <td>Greetings</td>
                      </tr>
                    </thead>
                    <tbody>
                        {tabledata.map((tableData,j) =>{
                                return (
                                    <tr key={j}>
                        <td>{tableData.name}</td>
                        <td>{tableData.score}</td>
                        <td>{tableData.email}</td>
                        <td>{tableData.location}</td>
                        <td>
                          <a href="/#" className="btn">
                            Congratulations
                          </a>
                        </td>
                      </tr>
                                );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
