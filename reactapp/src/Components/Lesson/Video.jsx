import React from "react";
// import video from "./video.mp4";
// import Thumbnail from "./Thumbnail.png";

export default function Video(props) {
  return (
    <React.Fragment>
      {/* <video
        className="page-width border_radius"
        // src={video}
        src="https://drive.google.com/file/d/15-LE8k855nl_9Tnub36dlKmHqmxU6_jV/view?usp=sharing"
        controls
        autoPlay
        poster={Thumbnail}
      /> */}
      <iframe className="page-width border_radius" style={{height:"85vh"}} src="https://www.youtube.com/embed/GdAon80-0KA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </React.Fragment>
  );
}
