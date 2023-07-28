import React from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const videoUrl = 'https://player.vimeo.com/external/451108713.sd.mp4?s=949f31b35a0b6d12b4480c2a1ba71a1b249e91a5&profile_id=164&oauth2_token_id=57447761';

const Video = () => {
  const navigate = useNavigate();

  const handleclick=()=>{
    navigate('/auth');
  }
  return (
    <>
      <Navbar />

      <div className="video-background-container" id="video-background-container">
        <video className="video-background" autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
        </video>

        <div className="video-content">

          <h1 className="video-title">A better learning starts here</h1>
          <button className="btn btn-primary video-button">Get Started</button>

        
        </div>
      </div>
    </>
  );
};

export default Video;
