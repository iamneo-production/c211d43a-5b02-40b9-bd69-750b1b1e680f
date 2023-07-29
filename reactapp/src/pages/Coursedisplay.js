import React from "react";
import "./landing.css";

function Coursedisplay() {
  return (
    <div className="top-courses">
      <h4 className="subject">Subjects</h4>
      <h2 className="topcourse-title">Explore Top Subjects</h2>
      <div className="flex-container">
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://img.freepik.com/free-photo/woman-scrolling-laptop_53876-167050.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=sph" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">AWS Certification</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://img.freepik.com/premium-photo/future-artificial-intelligence-robot-cyborg_31965-6980.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">Data Science</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://img.freepik.com/premium-photo/automation-data-analytic-with-robot-digital-visualization-big-data-scientist_493806-15023.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.1.1700164988.1685182975&semt=ais" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">Machine Learning</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">Ethical Hacking</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">Digital Marketing</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://t4.ftcdn.net/jpg/02/45/63/69/240_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">Cyber Security</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://img.freepik.com/premium-vector/i-love-design-blue-vector-concept-round-line-symbol_104589-3116.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.1.1700164988.1685182975&semt=ais" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">Graphic Design</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div id="subject1" className="subject-item">
          <div className="subject-image">
            <img src="https://img.freepik.com/premium-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais" alt="" />
            <a className="subject-overlay" href="">
              <h4 className="text-white font-weight-medium">Deep Learning</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>

      </div>
      <button className="btn btn-primary">Discover More</button>
    </div>
  );
}

export default Coursedisplay;
