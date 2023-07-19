import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles.css';


function UserSettingsPage() {
  const handleItemClick = (item) => {
    // Handle click event for each item
    console.log(`Clicked ${item}`);
  };

  return (
    <div className="user-settings-page">
      <div className="ribbon">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              to="/account-settings/user-management"
              className="nav-link"
              activeClassName="active"
              onClick={() => handleItemClick('User Management')}
            >
              User Management
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/account-settings/enrollments"
              className="nav-link"
              activeClassName="active"
              onClick={() => handleItemClick('Enrollments')}
            >
              Enrollments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/account-settings/payment-information"
              className="nav-link"
              activeClassName="active"
              onClick={() => handleItemClick('Payment Information')}
            >
              Payment Information
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/account-settings/preferences"
              className="nav-link"
              activeClassName="active"
              onClick={() => handleItemClick('Preferences')}
            >
              Preferences
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/account-settings/account-deletion"
              className="nav-link"
              activeClassName="active"
              onClick={() => handleItemClick('Account Deletion')}
            >
              Account Deletion
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserSettingsPage;
