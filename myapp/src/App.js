import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="App">
    <div className="page_wrape">
        {/* <!--slide bar--> */}
        <div className="side-bar">
            <div className="logo">
                <a href="/#">
                  <h1>  WEBSITE</h1>
                </a>
                <a href="/#"><img src="img1.jpg" alt="logo not found"/></a>
            </div>
            <div className="avtar">
                <div className="avtar-img">
                    
                </div>
                <div className="name-pos">
                    <h2>Leaderboard</h2>
                    <h4>Analysis</h4>
                </div>
            </div>
            <div className="side-bar-nav">
                <ul>
                    <li>
                        <a href="/#">
                            <span><i className="fa fa-home"></i></span>
                            <span class="nav-link">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span><i className="fab fa-leanpub"></i></span>
                            <span className="nav-link">Courses</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span><i className="fas fa-caret-square-right"></i></span>
                            <span className="nav-link">Students</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span><i className="fas fa-table"></i></span>
                            <span className="nav-link">Trainers</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span><i className="fas fa-boxes"></i></span>
                            <span className="nav-link">Exams</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span><i className="far fa-chart-bar"></i></span>
                            <span className="nav-link">Leaderboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span><i className="fas fa-sign-out-alt"></i></span>
                            <span className="nav-link">Setting</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

       {/*  <!---header--> */}
        <header>
            <div className="head_inner">
                <div className="right-part">
                    <form>
                        <input type="text" placeholder="Search..." required=""/>
                        <button><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="left-part">
                    <ul>
                        <li>
                            <div className="profile">
                                <div className="avtar-img">
                                   
                                </div>
                                <div className="avtor-name">
                                    <h3>Admin/Username</h3>
                                </div>
                            </div>
                        </li>
                        <li className="have_dots">
                            <span><i class="far fa-envelope"></i></span>
                        </li>
                        <li classNames="have_dots">
                            <span><i classNames="far fa-bell"></i></span>
                        </li>
                        <li>
                            <span className="bar"><i className="fas fa-bars"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>


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

export default App;
