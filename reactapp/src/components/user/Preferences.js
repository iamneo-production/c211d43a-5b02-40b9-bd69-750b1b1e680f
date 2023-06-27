import React, { useState, useEffect } from 'react';
import '../../Styles.css';

function Preferences() {
  const [enableAll, setEnableAll] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(true);
  const [assignmentDeadlines, setAssignmentDeadlines] = useState(true);
  const [communityEvents, setCommunityEvents] = useState(true);
  const [profileUpdate, setProfileUpdate] = useState(true);
  const [passwordChange, setPasswordChange] = useState(true);

  useEffect(() => {
    if (!courseUpdates || !assignmentDeadlines || !communityEvents || !profileUpdate || !passwordChange) {
      setEnableAll(false);
    } else {
      setEnableAll(true);
    }
  }, [courseUpdates, assignmentDeadlines, communityEvents, profileUpdate, passwordChange]);

  const handleEnableAll = () => {
    setEnableAll(!enableAll);
    setCourseUpdates(!enableAll);
    setAssignmentDeadlines(!enableAll);
    setCommunityEvents(!enableAll);
    setProfileUpdate(!enableAll);
    setPasswordChange(!enableAll);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    switch (name) {
      case 'courseUpdates':
        setCourseUpdates(checked);
        break;
      case 'assignmentDeadlines':
        setAssignmentDeadlines(checked);
        break;
      case 'communityEvents':
        setCommunityEvents(checked);
        break;
      case 'profileUpdate':
        setProfileUpdate(checked);
        break;
      case 'passwordChange':
        setPasswordChange(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="preferences">
      <div className="header">
        <h4>Notification Preferences</h4>
        <div className="enable-disable-all">
          <label htmlFor="enableAll">Enable All</label>
          <input
            type="checkbox"
            id="enableAll"
            name="enableAll"
            checked={enableAll}
            onChange={handleEnableAll}
          />
          <label htmlFor="disableAll">Disable All</label>
          <input
            type="checkbox"
            id="disableAll"
            name="disableAll"
            checked={!enableAll}
            onChange={handleEnableAll}
          />
        </div>
      </div>
      <div className="checkboxes">
        <div>
          <input
            type="checkbox"
            id="courseUpdates"
            name="courseUpdates"
            checked={courseUpdates}
            onChange={handleCheckboxChange}
            disabled={!enableAll}
          />
          <label htmlFor="courseUpdates">Course Updates</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="assignmentDeadlines"
            name="assignmentDeadlines"
            checked={assignmentDeadlines}
            onChange={handleCheckboxChange}
            disabled={!enableAll}
          />
          <label htmlFor="assignmentDeadlines">Assignment Deadlines</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="communityEvents"
            name="communityEvents"
            checked={communityEvents}
            onChange={handleCheckboxChange}
            disabled={!enableAll}
          />
          <label htmlFor="communityEvents">Community Events</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="profileUpdate"
            name="profileUpdate"
            checked={profileUpdate}
            onChange={handleCheckboxChange}
            disabled={!enableAll}
          />
          <label htmlFor="profileUpdate">Profile Update</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="passwordChange"
            name="passwordChange"
            checked={passwordChange}
            onChange={handleCheckboxChange}
            disabled={!enableAll}
          />
          <label htmlFor="passwordChange">Password Change</label>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
