import React from "react";
import "./title.css";
import { Link } from "react-router-dom";

export const Title = ({ nameTitle, titleSection, titlePubDate }) => {
  return (
    <Link>
      <div className="title-card">
        {/* <img></img> */}
        <p>{titleSection}</p>
        <b>{nameTitle}</b>
        <p>{titlePubDate}</p>
      </div>
    </Link>
  );
};
