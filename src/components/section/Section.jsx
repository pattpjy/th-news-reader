import { useState, useEffect } from "react";
import { Title } from "../title/title";
import CleanTitle from "../home/cleanTitle";
import { getSectionItems } from "../api/apiCall";
import { SideBar } from "../sideBar/sideBar";
import "./section.css";
import { useParams } from "react-router-dom";

export const Section = () => {
  const [allItems, setAllItems] = useState([]);
  const { section } = useParams();
  getSectionItems(section)
    .then((response) => {
      const data = response.results;
      return data;
    })
    .then((data) => {
      const clean = data.map((obj, index) => new CleanTitle(obj, index));
      return clean;
    })
    .then((clean) => {
      setAllItems(clean);
    })
    .catch((Error) => {
      console.error("All Items Fetch Error");
    });
  const displayTitles = () => {
    const showTitles = allItems.map((key, index) => (
      <Title
        key={`titleNo.1${index}`}
        nameTitle={key.title}
        titleSection={key.section}
        titleAbs={key.abstract}
        titlePubDate={key.publication_date}
        titleImg={key.thumbImg}
        titleUrl={key.url}
      />
    ));
    return showTitles;
  };

  const displaySection = async (section) => {
    const allSectionTitles = await getSectionItems(section);
    const clean = allSectionTitles.results.map(
      (obj, index) => new CleanTitle(obj, index)
    );
    setAllItems(clean);
  };

  return (
    <div className="display-title">
      <header>Section : {section}</header>
      {displayTitles()}
    </div>
  );
};