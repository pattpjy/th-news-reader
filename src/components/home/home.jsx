import { useState, useEffect } from "react";
import { Title } from "../title/title";
import CleanTitle from "../api/cleanTitle";
import { getTopTitle } from "../api/apiCall";
import "./home.css";

export const Home = () => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    const fetchTops = async () => {
      const titleData = await getTopTitle();
      setAllItems(titleData);
    };
    fetchTops().catch((Error) => {
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
