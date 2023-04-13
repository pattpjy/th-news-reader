import React from "react";
import "./title.css";
// import { Link } from "react-router-dom";

export const Title = ({
  titleID,
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
        <img src={titleImg} />
        <p>{titleSection}</p>
        <b>{nameTitle}</b>
        <p>{titlePubDate}</p>
      </div>
    </a>
  );
};
