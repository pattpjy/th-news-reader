import React from "react";
import "./title.css";
import { Link } from "react-router-dom";

export const Title = ({
  nameTitle,
  titleSection,
  titleAbs,
  titleUrl,
  titlePubDate,
  titleImg,
}) => {
  return (
    <Link
      to={`/${titleSection}/${nameTitle}`}
      state={{
        titleName: nameTitle,
        titleUrl: titleUrl,
        titleDate: titlePubDate,
        abstract: titleAbs,
        img: titleImg,
      }}
    >
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
    </Link>
  );
};
