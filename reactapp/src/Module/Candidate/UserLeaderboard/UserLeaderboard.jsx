import NavCandidate from '../../../Components/NavCandidate';
//import React, { useEffect, useState } from "react";
import './UserLeaderboard.css';
//import axios from "axios";
//import base_url from "./api";
import cardData from './cardData';
import tableData from './tableData';


export default function Leaderboard() {
  
/*const [Leaderboard , setLeaderboard] = useState([]);

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

  const cardData = leaderboard.slice(0,3);
  const tableData = leaderboard.slice(3); */

  return (
    <div>
      <NavCandidate/>
      <div className="lApp">
        <div className="lpage_wrape">
        <div className="lmain-content">
        <div className="linfo-lcard">
                {cardData.map((e,index) => {
                    return (
                        <div className="lcard" key={index}>
                <div className="lcard-icon">
                  <span>
                    <i className="fa fa-trophy"></i>
                  </span>
                </div>
                <div className="lcard-detail">
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
                        <td>Score </td>
                        <td>Email</td>
                        <td>Location</td>
                        <td>Greetings</td>
                      </tr>
                    </thead>
                    <tbody>
                        {tableData.map((tabledata,j) =>{
                                return (
                                    <tr key={j}>
                        <td>{tabledata.name}</td>
                        <td>{tabledata.score}</td>
                        <td>{tabledata.email}</td>
                        <td>{tabledata.location}</td>
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
  );
}