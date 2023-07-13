import './Leaderboard.css';
import React from 'react';

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
function Leaderboard() {
    return (
    <div className="App">
    <div className="page_wrape">
        {/*  <!---main content--> */}

        <div className="main-content">
            <div className="info-card">
                <div className="card">
                    <div className="card-icon">
                      <span><i className="fa fa-trophy"></i></span>
                    </div>
                    <div className="card-detail">
                        <h2>85,000</h2>
                        <h4>Arun Kumar S</h4>

                    </div>
                    <p>Madurai</p>
                </div>
                <div className="card">
                    <div className="card-icon">
                      <span><i className="fa fa-trophy"></i></span>
                    </div>
                    <div className="card-detail">
                        <h2>98,785</h2>
                        <h4>Swatha R</h4>

                    </div>
                    <p>Bangalore</p>
                </div>
                <div className="card">
                    <div className="card-icon">
                      <span><i className="fa fa-trophy"></i></span>
                    </div>
                    <div className="card-detail">
                        <h2>83,761</h2>
                        <h4>Madhumitha S</h4>

                    </div>
                    <p>Chennai</p>
                </div>
            </div>
            <div className="main-table">
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
                                <tr>
                                    <td>Anusha adul</td>
                                    <td>76,000</td>
                                    <td>anusha@gmail.com</td>
                                    <td>Vellur</td>
                                    <td><a href="/#" className="btn">Congratulations</a></td>
                                </tr>
                                <tr>
                                    <td>Bharathi R</td>
                                    <td>73,765</td>
                                    <td>rbharathi12@gmail.com</td>
                                    <td>Erode</td>
                                    <td><a href="/#" className="btn">Congratulations</a></td>
                                </tr>
                                <tr>
                                    <td>Chandru M</td>
                                    <td>69,653</td>
                                    <td>chaan@gmail.com</td>
                                    <td>Madurai</td>
                                    <td><a href="/#" className="btn">Congratulations</a></td>
                                </tr>
                                <tr>
                                    <td>Ramesh R</td>
                                    <td>65,987</td>
                                    <td>ram01esh@gmail.com</td>
                                    <td>Coimbatore</td>
                                    <td><a href="/#" className="btn">Congratulations</a></td>
                                </tr>

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
