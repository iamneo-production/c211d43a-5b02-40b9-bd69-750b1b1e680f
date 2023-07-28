import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ScorePage.css'; 
import { Button } from '@mantine/core';

export default function ScorePage() {
  const { finalans, total } = useParams();

  const nav = useNavigate()
  return (
    <div className="score-container">
      <h2 className="score-text animated-fade-in">
        Your score is {finalans}/{total}

      </h2>
     
      <Button style={{position:'absolute',top:'450px'}} onClick={()=>nav('/')}>back to Events</Button>
    </div>
  );
}
