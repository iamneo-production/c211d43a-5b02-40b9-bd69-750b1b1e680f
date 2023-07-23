import React from "react";

export default function Card(props) {
  return (
    <React.Fragment>
        <div className="trainee-card trainee-row">
          <div className="trainee-card_image">
            <img
              src={props.data.src}
              alt="profile"
            />
          </div>
          <div className="trainee-card_details">
            <h1>{props.data.name}</h1>
            <p>{props.data.course}</p>
            <div className="trainee-social_links">
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
