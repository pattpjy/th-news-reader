import React from "react";
import "./title.css";

export const Title = ({ nameTitle, titleSection, titlePubDate }) => {
  return (
    <div className="title-card">
      {/* <img></img> */}
      <p>{titleSection}</p>
      <b>{nameTitle}</b>
      <p>{titlePubDate}</p>
    </div>
  );
};
