import React, { useState, useEffect } from 'react';
import './UserSettings.css';

const Settings = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('');

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  const renderMainContent = () => {
    if (selectedNavItem === 'Close Account') {
      return (
        <div className="main-content-settings">
          <div className='Head-tag-settings'>
            <h2>Close Account</h2>
          </div>
          
          <p className='tagline'>Close your account permanently</p>
          <div className="warning-container">
            <p>
              <strong>Warning:</strong> If you close your account, you will be unsubscribed from all your courses and will lose access forever.
            </p>
            <button className='delete-btn'>Close Account</button>
            
          </div>
        </div>
      );
    } else if (selectedNavItem === 'Photo') {
      return (
        <div className="main-content-settings">
          <div className='Head-tag-settings'>
          <h2>Photo</h2>
          </div>
          <p className='tagline'>Add a nice photo of yourself for your profile</p>
          <div className='image-preview-tag'>Image preview:</div>
          <div className="image-preview" style={{ backgroundImage: 'url(https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg)' }}></div>
          <div className="upload-container">
            <div className="horizontal-rectangle" >
              <p>Click to upload image</p>
              <button className="stable-btn">Upload</button>
            </div>
            <div className="button-container">
              <button className="stable-btn">Save changes</button>
              <button className="stable-btn">Cancel</button>
            </div>
          </div>
        </div>
      );
    } else if (selectedNavItem === 'Account Security') {
      return (
        <div className="main-content-settings">
          <div className='Head-tag-settings'>
            <h2>Account Settings</h2>
          </div>
          <p className='tagline'>Edit your account settings and change your password here</p>
          <div className="account-settings">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Retype New Password" />
          </div>
          <div className="button-container">
            <button className='stable-btn'>Change Password</button>
          </div>
        </div>
      );
    } else if (selectedNavItem === 'Payment methods') {
      return (
        <div className="main-content-settings">
          <div className='Head-tag-settings'>
            <h2>Your saved payments</h2>
          </div>
          <p className='tagline'>Add new payment method & saved payment methods</p>
          <div className='saved-payment'>Your saved payment methods:</div>
          <div className='saved-payment-container'></div>
          <button className='payment-btn'>Add Payment</button>
        </div>
      );
    } else if (selectedNavItem === 'Notifications') {
      return (
        <div className="main-content-settings">
          <div className='Head-tag-settings'>
            <h2>Notifications</h2>
          </div>
          <p className='tagline'>Turn email notifications on or off</p>
          <div className="notifications-container">
            <h4>I want to receive:</h4>
            <div className="checkboxes">
              <label>
                <input type="checkbox" />
                Course recommendations
              </label>
              <label>
                <input type="checkbox" />
                Announcements from instructors
              </label>
              <label>
                <input type="checkbox" />
                Profile update
              </label>
            </div>
          </div>
        </div>
      );
    } else if (selectedNavItem === 'Profile') {
      return (
        <div className="main-content-settings">
          <div className='Head-tag-settings'>
            <h2>Public Profile</h2>
          </div>
          <p className='tagline'>Add information about yourself</p>
          <div className="profile-details">
            <div className="form-group">
              <label for="first-name">First Name:</label>
              <input type="text" id="first-name" />
            </div>
            <div className="form-group">
              <label for="last-name">Last Name:</label>
              <input type="text" id="last-name" />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="text" id="email" />
            </div>
            <div className="form-group">
              <label for="mobile-number">Mobile Number:</label>
              <input type="text" id="mobile-number" />
            </div>
          </div>
          <div className="button-container">
              <button className="stable-btn">Save changes</button>
              <button className="stable-btn">Cancel</button>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    setSelectedNavItem('Profile');
  }, []);

  return (
    <div className="settings-container">
      <div className="sidebar-content">
        <div className="image-holder">
          <div className="circle-image" style={{ backgroundImage: 'url(https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg)' }} />
        </div>
        <h4 className="user-name">User Name</h4>
        <ul className="nav-items">
          <li onClick={() => handleNavItemClick('Profile')}>Profile</li>
          <li onClick={() => handleNavItemClick('Photo')}>Photo</li>
          <li onClick={() => handleNavItemClick('Account Security')}>Account Security</li>
          <li onClick={() => handleNavItemClick('Payment methods')}>Payment methods</li>
          <li onClick={() => handleNavItemClick('Notifications')}>Notifications</li>
          <li onClick={() => handleNavItemClick('Close Account')}>Close Account</li>
        </ul>
      </div>
      {renderMainContent()}
    </div>
  );
};

export default Settings;
