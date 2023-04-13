import React from "react";
import "./title.css";
// import { Link } from "react-router-dom";

export const Title = ({
  nameTitle,
  titleSection,
  titleAbs,
  titleUrl,
  titlePubDate,
  titleImg,
}) => {
  return (
    <a href={titleUrl}>
      <div className="title-card">
        <div className="title-top">
          <p>{titleSection}</p>
          <p>{titlePubDate}</p>
        </div>
        <div className="title-body">
          <img className="title-image" alt="" src={titleImg} />
          <b>{nameTitle}</b>
        </div>
      </div>
    </a>
  );
};
