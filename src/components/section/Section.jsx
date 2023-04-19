import { useState } from "react";
import { Title } from "../title/title";
import { getSectionTitle } from "../api/apiCall";
import "./section.css";
import { useParams } from "react-router-dom";

export const Section = () => {
  const [allItems, setAllItems] = useState([]);
  const { section } = useParams();
  getSectionTitle(section)
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

  return (
    <div className="display-title">
      <h1>Section : {section}</h1>
      {displayTitles()}
      <button>Read full</button>
    </div>
  );
};
