import React from 'react';
import './StudentData.css';
import './Styles.css';

function StudentData() {
  const studentData = [
    {
      id: 1,
      name: 'Harish Kumar',
      email: 'harish@gmail.com',
      phone: '988567840',
      activity: 'Enrolled'
    },
    {
      id: 2,
      name: 'Harsha reddy',
      email: 'Harsha8803@gmail.com',
      phone: '7995363678',
      activity: 'Registered'
    },
    {
      id: 2,
      name: 'Lakshmi Prasad',
      email: 'Prasad12@gmail.com',
      phone: '6304505421',
      activity: 'Registered'
    },
    // Add more student data objects as needed
  ];

  return (
    <div className="student-data-container">
      <h2>Student Details</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Activity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.activity}</td>
              <td>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentData;
