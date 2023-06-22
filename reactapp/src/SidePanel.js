import React from 'react';
import './Styles.css';

function SidePanel() {
  const handleClick = (menu) => {
    console.log('Clicked:', menu);
    // Handle your menu click logic here
  };

  return (
    <div className="side-panel">
      <ul className="list-group">
        <li className="list-group-item" onClick={() => handleClick('Dashboard')}>
          Dashboard
        </li>
        <li className="list-group-item" onClick={() => handleClick('Students')}>
          Students
        </li>
        <li className="list-group-item" onClick={() => handleClick('Trainers')}>
          Trainers
        </li>
        <li className="list-group-item" onClick={() => handleClick('Admins')}>
          Admins
        </li>
        <li className="list-group-item" onClick={() => handleClick('Account')}>
          Account
        </li>
        <li className="list-group-item" onClick={() => handleClick('Contact Us')}>
          Contact Us
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
