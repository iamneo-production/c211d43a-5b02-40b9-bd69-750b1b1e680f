import NavCandidate from '../../../Components/NavCandidate';
import './UserLeaderboard.css';
import React, { useState } from 'react';


<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
import card from './cardData';
import tabledata from './tableData';

function SearchBar({ onlSearch }) {
  const handleSearchChange = (event) => {
    const lsearchTerm = event.target.value;
    onlSearch(lsearchTerm);
  };

  return (
    <div className="lsearch-bar">
      <input
        type="text"
        placeholder="lSearch by name"
        onChange={handleSearchChange}
      />
    </div>
  );
}
  function Leaderboard() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);
    };
  
    return (

        <div>
            <NavCandidate/>

            <div className="App">
      <div className="page_wrape">
        {/* <!---main content--> */}

        <div className="lmain-content">
          <div className="info-card">
            {card &&
              card.map((e, index) => (
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
              ))}
          </div>
        </div>

        <div className="lmain-table">
          <div className="title">
            <h2>All Users</h2>
            <SearchBar onSearch={handleSearch} />
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
                  {tabledata &&
                    tabledata
                      .filter(
                        (data) =>
                          data.name.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((tableData, j) => (
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
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Leaderboard;
