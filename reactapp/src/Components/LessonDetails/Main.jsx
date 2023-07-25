import React, { useEffect, useState } from "react";
import "./main.css";
import Notes from "./Notes";
import Video from "./Video";
import Summary from "./Summary";
import CourseModule from "./CourseModule";

export default function Main() {
  const [showNotesLine, setShowNotesLine] = useState(true);
  const [showSummaryLine, setShowSummaryLine] = useState(false);
  const [showNotes, setSHowNotes] = useState(true);

  useEffect(()=>{
  document.body.style.backgroundColor="#0d1a2d";
  document.body.style.color="white";
  },[])
  const handleNotesClick = () => {
    setShowNotesLine(true);
    setShowSummaryLine(false);
    setSHowNotes(true);
  };
  const handleSummaryClick = () => {
    setShowNotesLine(false);
    setShowSummaryLine(true);
    setSHowNotes(false);
  };

  return (
    <div>
      <section id="video" className="page-width">
        <Video />
      </section>
      <section id="nav" className="my-4 content center page-width">
        <div className="lesson_left content-width">
          <div id="navbar">
            <ul className="nav">
              <li
                style={{ borderRight: " 1px solid grey" }}
                onClick={handleNotesClick}
              >
                Notes
              </li>
              <li onClick={handleSummaryClick}>Summary</li>
            </ul>
          </div>
          {showNotesLine && (
            <hr
              style={{
                background: "#20fc8f",
                opacity: "1",
                width: "4.7vw",
                height: "2.5px",
                position: "absolute",
              }}
            />
          )}
          {showSummaryLine && (
            <hr
              style={{
                background: "#20fc8f",
                opacity: "1",
                width: "5.6vw",
                height: "2.5px",
                position: "absolute",
                left: "11.9vw",
              }}
            />
          )}
          <hr
            style={{ background: "white", height: "1px" }}
            className="content-width"
          />

          {showNotes ? <Notes /> : <Summary />}
        </div>

        <div className="lesson_right">
          <div className="lesson_coursebox">
            <CourseModule h4="Table of content" />
          </div>
        </div>
      </section>
    </div>
  );
}
