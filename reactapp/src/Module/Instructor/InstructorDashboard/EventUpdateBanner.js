import React, { useState, useEffect } from 'react';
import './InstructorDashboard.css';

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

export default EventUpdateBanner;
