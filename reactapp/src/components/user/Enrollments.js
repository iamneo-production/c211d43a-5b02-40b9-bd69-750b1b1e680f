import React from 'react';
import '../../Styles.css';

function Enrollment() {
  const courses = [
    { id: 1, title: 'Course 1', enrolled: true, favorite: false },
    { id: 2, title: 'Course 2', enrolled: true, favorite: true },
    { id: 3, title: 'Course 3', enrolled: true, favorite: false },
    // Add more course objects as needed
  ];

  const handleUnenroll = (courseId) => {
    // Handle unenroll logic
    console.log(`Unenroll course with ID: ${courseId}`);
  };

  const handleFavorite = (courseId) => {
    // Handle mark as favorite logic
    console.log(`Mark course with ID: ${courseId} as favorite`);
  };

  return (
    <div className="enrollment">
      <h4>Enrolled Courses</h4>
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <button
              className="btn btn-danger"
              onClick={() => handleUnenroll(course.id)}
            >
              Unenroll
            </button>
            <button
              className={`btn ${course.favorite ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleFavorite(course.id)}
            >
              {course.favorite ? 'Favorited' : 'Mark as Favorite'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Enrollment;
