import React, { useState, useEffect } from 'react';
import './InstructorDashboard.css';
import { Link } from 'react-router-dom';
import { FaMedal, FaGraduationCap, FaBookReader } from 'react-icons/fa';
import  {BiSearchAlt} from 'react-icons/bi'
import { MdNotifications} from 'react-icons/md'



const EventUpdateBanner = ({ updates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [updates.length]);

  return (
    <div className="event-update-banner">
      {updates.map((update, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${update.image})` }}
        >
          <div className="overlay">
            <h3>{update.title}</h3>
            <p>{update.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Top = () => {
    const video='https://player.vimeo.com/external/437106982.sd.mp4?s=8431b9534b82d2419ffff68218a1ea7bb5168ba6&profile_id=164&oauth2_token_id=57447761';
    const eventUpdates = [
        {
          title: 'Coding Contest',
          description: 'Register Soon',
          image: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=826&t=st=1689404289~exp=1689404889~hmac=c6f0648f11561316b4b2b27f0b0437ac8f60e8f00ce52c88cf96d4edc5b44cb8",
        },
        {
          title: 'Project Exibition',
          description: 'Registrations Closes Soon!',
          image:"https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=sph",
        },
        {
          title: 'Paper Presentation',
          description: 'Starts on Aug 08.',
          image:"https://img.freepik.com/premium-psd/poster-template-magenta-color-background_24972-2122.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais",
        },
        // Add more update objects as needed
      ];
    
    return(
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to EduSmart</h1>
                    <p>Hello Abinath, Welcome back!</p>
                </div>
            <div className="searchBar flex">
                <input type='text' placeholder='Search Courses'/>
                <BiSearchAlt className='icon'/>
            </div>

            <div className="adminDiv flex">
                <MdNotifications className='icon'/>
                <div className="adminnImage">
                    <img src="" alt="Admin Image"/>
                </div>
            </div>

        </div>
        <div className="statistics">
         
            <div className="box123">
              <FaGraduationCap className="iconn" />
              <div className="content">
                <h3>7</h3>
                <Link className='link'><span>Courses Completed</span></Link>
              </div>
            </div>
            <div className="box123">
              <FaMedal className="iconn" />
              <div className="content">
                <h3>456</h3>
                <Link className='link'>Badges Earned</Link>
              </div>
            </div>
            <div className="box123">
              <FaBookReader className="iconn" />
              <div className="content">
                <h3>8</h3>
                <span><Link className='link'>Courses Enrolled</Link></span>
              </div>
            </div>
          </div>
          <h2>New Launchers</h2>
            <div className="cardSection123 flex">
            
                <div className="rightCard flex">
                    <h1>Enhancing Lives Through Education</h1>
                    <p>The future belongs to those who learn </p>
                    
                    <div className="buttons flex">
                        <button className='btn'>Unlock Premieum</button>
                        <button className='btn transparent'>Explore more</button>
                    </div>

                    <div className="videoDiv">
                        <video src= {video} autoPlay loop muted ></video>
                    </div>


                </div>

                <div className="leftCard flex">
                        
                    
                    <div className='123event123'>
      <h3>Upcoming Events</h3>
      <EventUpdateBanner updates={eventUpdates} />
      
    </div>
                   
            
                </div>
                
            </div>

        </div>
    )

};

const Listing = () => {
    const enrolledstudent1s = [
      { id: 1, name: 'Manish', email: 'manish@gmail.com', avatar: 'https://img.freepik.com/premium-photo/portrait-attractive-curly-business-lady-toothy-beaming-smiling-good-morning-mood-ready-start-working-wear-formalwear-yellow-shirt_274222-20422.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais' },
      { id: 2, name: 'Smith', email: 'janesmith@gmail.com', avatar: 'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais' },
      { id: 1, name: 'Pradeep', email: 'pradeep@gmail.com', avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.1.1383474551.1689404268&semt=ais' },
      { id: 2, name: 'Shree', email: 'shree@gmail.com', avatar: 'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.2.1383474551.1689404268&semt=ais' },
      // Add more enrolled student1s data
      ];
    
    
     
      
      const courses = [
        
        
      ];
    
      
    
      return (
        <div>
        
        <div className="instructor-dashboard">
         
         
         
          <div className="demo-info">

  <div className="demo-section">
    
    <h2>Enrolled student1s</h2>
    <div className="student1-list">
      {enrolledstudent1s.map((student1) => (
        <div className="student1" key={student1.id}>
          <img src={student1.avatar} alt="student1 Avatar" />
          <div className="student1-info">
            <h4>{student1.name}</h4>
            <p>{student1.email}</p>
          </div>
          <div className="student1-actions">
            <button className="btn-view-profile"> Profile</button>
            <button className="btn-unenroll">Unenroll</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="new-courses-section">
  
  <div className="courses-container">
    {courses.map((course, index) => (
      <div key={index} className="course-card">
        <div className="image-container">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-details123">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <div className="button-container">
            <span className="enroll-icon">
              <i className="fas fa-graduation-cap"></i> Enroll
            </span>
            
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



            
          </div>
          </div>
        
  );
};

const Body = () => {
  // ... (The code for the Body component from before)
};

const Landing = () => {
 
 

  return (
    <div className='container123'>
    <div className='mainContent11'>
      <Top />
      
      <div className='bottom flex'>
       
        <Listing />
        
      </div>
    </div>
    </div>
  );
};

export default Landing;
