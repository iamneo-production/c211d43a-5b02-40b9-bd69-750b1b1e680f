import React from 'react'
import './InstructorDashboard.css';



import EventUpdateBanner from './EventUpdateBanner';

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