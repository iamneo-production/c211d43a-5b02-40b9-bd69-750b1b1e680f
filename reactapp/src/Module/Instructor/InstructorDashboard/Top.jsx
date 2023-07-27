import React from 'react'
import './InstructorDashboard.css'
import  {BiSearchAlt} from 'react-icons/bi'
import { MdNotifications} from 'react-icons/md'
import{AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { FaMedal, FaGraduationCap, FaBookReader } from 'react-icons/fa';

import img from '../../../Assets/images/teacher1.png'



import { BsArrowRightShort } from 'react-icons/bs'
import EventUpdateBanner from '../EventUpdateBanner'

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
                <div className="adminImage">
                    <img src={img} alt="Admin Image"/>
                </div>
            </div>

        </div>
        <div className="statistics">
         
            <div className="box">
              <FaGraduationCap className="iconn" />
              <div className="content">
                <h3>7</h3>
                <Link className='link'><span>Courses Completed</span></Link>
              </div>
            </div>
            <div className="box">
              <FaMedal className="iconn" />
              <div className="content">
                <h3>456</h3>
                <Link className='link'>Badges Earned</Link>
              </div>
            </div>
            <div className="box">
              <FaBookReader className="iconn" />
              <div className="content">
                <h3>8</h3>
                <span><Link className='link'>Courses Enrolled</Link></span>
              </div>
            </div>
          </div>
          <h2>New Launchers</h2>
            <div className="cardSection flex">
            
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
                        
                    
                    <div>
      <h3>Upcoming Events</h3>
      <EventUpdateBanner updates={eventUpdates} />
      
    </div>
                   
            
                </div>
                
            </div>

        </div>
    )
}
const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll("video-slide")
var sliderNav=function(manual){

    btns.forEach((btn) => {
btn.classList.remove("active")
    });
    slides.forEach((slide) => {
        slides.classList.remove("active")
            });
    
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
};
btns.forEach((btn,i) => {
    btn.addEventListener("click",() => {
        sliderNav(i);
    });
})
export default Top;