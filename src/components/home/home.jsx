import { useState, useEffect } from "react";
import { Title } from "../title/title";
import CleanTitle from "../home/cleanTitle";
import { getAllItems } from "../api/apiCall";

import "./home.css";

export const Home = () => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    getAllItems()
      .then((response) => {
        const data = response.results.map(
          (obj, index) => new CleanTitle(obj, index)
        );
        setAllItems(data);
        return data;
      })
      .catch((Error) => {
        console.error("All Items Fetch Error");
      });
  }, []);

  const displayTitles = () => {
    const showTitles = allItems.map((item, index) => {
      return (
        <Title
          key={`titleNo.1${index}`}
          nameTitle={item.title}
          titleSection={item.section}
          titleAbs={item.abstract}
          titlePubDate={item.publication_date}
          titleImg={item.thumbImg}
          titleUrl={item.url}
        />
      );
    });
    return showTitles;
  };

  return (
    <div>
      <header>Daily News Update</header>
      <div className="display-title">{displayTitles()}</div>
    </div>
  );
};
