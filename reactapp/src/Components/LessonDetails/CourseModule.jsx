import React from "react";

export default function CourseModule(props) {
  return (
    <React.Fragment>
      <h4 className="box-color border_radius">{props.h4}</h4>
      <div className="coursebox-content box-color border_radius">
        <h6>Course Module</h6>
        <hr />
        <ul>
          <li>Course Overview</li>
          <hr />
          <li>Why Java</li>
          <hr />
          <li>Java IDE</li>
          <hr />
          <li>Hello World Program</li>
          <hr />
          <li>Scanner Class</li>
          <hr />
          <li>Methods</li>
          <hr />
          <li>Assignment</li>
          <hr />
        </ul>
      </div>
    </React.Fragment>
  );
}
