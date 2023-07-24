import React from "react";

export default function Summary(props) {
  return (
    <React.Fragment>
      <div className="summary content-width border_radius">
        <h6 className="font-bold">Key takeaways from this chapter</h6>
        <p style={{ paddingTop: "1rem", fontSize: "14px" }}>
          In this video, we take a brief look at all the topics that we will be
          covering in the entire course
        </p>
      </div>
    </React.Fragment>
  );
}
