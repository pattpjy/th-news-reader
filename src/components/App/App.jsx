import "./App.css";
import { useState, useEffect } from "react";
import { Title } from "../title/title";
import CleanTitle from "../home/cleanTitle";
import { getAllItems, getSectionItems } from "../api/apiCall";
import { SideBar } from "../sideBar/sideBar";
export const App = () => {
  const [allItems, setAllItems] = useState([]);
  const [errorImg, setErrorImg] = useState(false);

  useEffect(() => {
    getAllItems()
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
  }, []);

  const displayTitles = () => {
    const showTitles = allItems.map((key, index) => {
      return (
        <>
          <Title
            key={`titleNo.1${index}`}
            nameTitle={key.title}
            titleSection={key.section}
            titleAbs={key.abstract}
            titlePubDate={key.publication_date}
            titleImg={key.thumbImg}
            titleUrl={key.url}
          />
        </>
      );
    });
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
    <>
      <header>Daily News Update</header>
      <div className="container">
        <div className="side-bar">
          <SideBar getSection={displaySection} />
        </div>
        <div className="display-title">{displayTitles()}</div>
      </div>
    </>
  );
};
