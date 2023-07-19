import React from "react";
// import video from "./video.mp4";
// import Thumbnail from "./Thumbnail.png";

export default function Video(props) {
  return (
    <React.Fragment>
      <video
        className="page-width border_radius"
        // src={video}
        controls
        // autoPlay
        // poster={Thumbnail}
      />
    </React.Fragment>
  );
}
