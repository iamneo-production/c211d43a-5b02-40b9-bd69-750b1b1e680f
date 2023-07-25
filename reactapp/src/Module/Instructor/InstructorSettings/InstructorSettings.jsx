import React, { useState } from 'react';
import './InstructorSettings.css';

const InstructorSettings = () => {
  const [activeCategory, setActiveCategory] = useState('profile');

  // Profile Settings state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');

  // Course Management state
  const [courseTitle, setCourseTitle] = useState('');
  const [courseMaterials, setCourseMaterials] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  // Gradebook state
  const [grades, setGrades] = useState([
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B+' },
    { id: 3, name: 'Mike Johnson', grade: 'A-' },
  ]);

  // Function to handle grade updates
  const handleGradeChange = (event, studentId) => {
    const updatedGrades = grades.map((student) => {
      if (student.id === studentId) {
        return { ...student, grade: event.target.value };
      }
      return student;
    });
    setGrades(updatedGrades);
  };

  // Function to generate report
  const generateReport = () => {
    // Code to generate report
    // ...
  };

  // Communication Tools state
  const [notifications, setNotifications] = useState([]);
  const [discussionTopics, setDiscussionTopics] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [messages, setMessages] = useState([]);

  // Functions to handle form input changes
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const handleCourseTitleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  const addCourseMaterial = (event) => {
    event.preventDefault();
    if (courseTitle) {
      setCourseMaterials([...courseMaterials, courseTitle]);
      setCourseTitle('');
    }
  };

  const removeCourseMaterial = (index) => {
    const updatedMaterials = [...courseMaterials];
    updatedMaterials.splice(index, 1);
    setCourseMaterials(updatedMaterials);
  };

  const addAssessment = (event) => {
    event.preventDefault();
    if (courseTitle) {
      setAssessments([...assessments, courseTitle]);
      setCourseTitle('');
    }
  };

  const removeAssessment = (index) => {
    const updatedAssessments = [...assessments];
    updatedAssessments.splice(index, 1);
    setAssessments(updatedAssessments);
  };

  const addEnrollment = (event) => {
    event.preventDefault();
    if (courseTitle) {
      setEnrollments([...enrollments, courseTitle]);
      setCourseTitle('');
    }
  };

  const removeEnrollment = (index) => {
    const updatedEnrollments = [...enrollments];
    updatedEnrollments.splice(index, 1);
    setEnrollments(updatedEnrollments);
  };

  const submitProfileSettings = (event) => {
    event.preventDefault();
    // Code to submit profile settings data to the server
    // ...
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            <h3>Settings</h3>
            <ul className="categories">
              <li
                className={`category ${activeCategory === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveCategory('profile')}
              >
                Profile Settings
              </li>
              <li
                className={`category ${activeCategory === 'course' ? 'active' : ''}`}
                onClick={() => setActiveCategory('course')}
              >
                Course Management
              </li>
              <li
                className={`category ${activeCategory === 'gradebook' ? 'active' : ''}`}
                onClick={() => setActiveCategory('gradebook')}
              >
                Gradebook
              </li>
              <li
                className={`category ${activeCategory === 'communication' ? 'active' : ''}`}
                onClick={() => setActiveCategory('communication')}
              >
                Communication Tools
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="settings-content">
            {activeCategory === 'profile' && (
              <>
                <h2 style={{ textDecoration: 'underline' ,color: 'green'}}>Profile Settings</h2>
                <form onSubmit={submitProfileSettings}>
                  <label htmlFor="first-name">First Name:</label>
                  <input type="text" id="first-name" value={firstName} onChange={handleFirstNameChange} />

                  <label htmlFor="last-name">Last Name:</label>
                  <input type="text" id="last-name" value={lastName} onChange={handleLastNameChange} />

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={handleEmailChange} />

                  <label htmlFor="mobile-number">Mobile Number:</label>
                  <input type="text" id="mobile-number" value={mobileNumber} onChange={handleMobileNumberChange} />

                  <label htmlFor="bio">Bio:</label>
                  <textarea id="bio" rows="4" value={bio} onChange={handleBioChange}></textarea>

                  <label htmlFor="skills">Skills:</label>
                  <input type="text" id="skills" value={skills} onChange={handleSkillsChange} />

                  <button type="submit">Save Profile Settings</button>
                </form>
              </>
            )}

            {activeCategory === 'course' && (
              <>
                <h2 style={{ textDecoration: 'underline' ,color: 'green'}}>Course Management</h2>
                <h4>Course Materials:</h4>
                <form onSubmit={addCourseMaterial}>
                  <label htmlFor="course-title">Course Title:</label>
                  <input
                    type="text"
                    id="course-title"
                    value={courseTitle}
                    onChange={handleCourseTitleChange}
                  />
                  <button type="submit">Add Course Material</button>
                </form>
                <ul>
                  {courseMaterials.map((material, index) => (
                    <li key={index}>
                      {material}
                      <button onClick={() => removeCourseMaterial(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
                <h4>Assessments:</h4>
                <form onSubmit={addAssessment}>
                  <label htmlFor="assessment-title">Assessment Title:</label>
                  <input
                    type="text"
                    id="assessment-title"
                    value={courseTitle}
                    onChange={handleCourseTitleChange}
                  />
                  <button type="submit">Add Assessment</button>
                </form>
                <ul>
                  {assessments.map((assessment, index) => (
                    <li key={index}>
                      {assessment}
                      <button onClick={() => removeAssessment(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
                <h4>Enrollments:</h4>
                <form onSubmit={addEnrollment}>
                  <label htmlFor="enrollment-title">Enrollment Title:</label>
                  <input
                    type="text"
                    id="enrollment-title"
                    value={courseTitle}
                    onChange={handleCourseTitleChange}
                  />
                  <button type="submit">Add Enrollment</button>
                </form>
                <ul>
                  {enrollments.map((enrollment, index) => (
                    <li key={index}>
                      {enrollment}
                      <button onClick={() => removeEnrollment(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {activeCategory === 'gradebook' && (
              <>
                <h2 style={{textDecoration: 'underline' , color: 'green'}}>Gradebook</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>
                          <input
                            type="text"
                            value={student.grade}
                            onChange={(event) => handleGradeChange(event, student.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button onClick={generateReport}>Generate Report</button>
              </>
            )}

            {activeCategory === 'communication' && (
              <>
                <h2 style={{ textDecoration: 'underline' ,color: 'green'}}>Communication Tools</h2>
                <div>
                <h4>E-mail preferences</h4>
                  <form>
                    {/* Email notifications form fields */}
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" />

                    <label htmlFor="frequency">Frequency:</label>
                    <select id="frequency">
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>

                    <button type="submit">Save Email Notifications</button>
                  </form>
                </div>
                <div>
                  <h4>Discussion Boards</h4>
                  <form>
                    {/* Discussion boards form fields */}
                    <label htmlFor="topic">Topic:</label>
                    <input type="text" id="topic" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="4" />

                    <button type="submit">Post Discussion</button>
                  </form>
                </div>
                <div>
                  <h4>Announcements</h4>
                  <form>
                    {/* Announcements form fields */}
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" />

                    <label htmlFor="announcement">Announcement:</label>
                    <textarea id="announcement" rows="4" />

                    <button type="submit">Create Announcement</button>
                  </form>
                </div>
                <div>
                  <h4>Messaging Systems</h4>
                  <form>
                    {/* Messaging systems form fields */}
                    <label htmlFor="recipient">Recipient:</label>
                    <input type="text" id="recipient" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="4" />

                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </>
            )}

            {/* Add more conditionals for other categories */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSettings;
