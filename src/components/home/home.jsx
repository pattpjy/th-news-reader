import { useState, useEffect } from "react";
import { Title } from "../title/title";
import CleanTitle from "./title";

export const Home = () => {
  const [allItems, setAllItems] = useState([]);

  //make api call for allTopic
  const getAllItems = async () => {
    const url =
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=p2reGHQM99Whk2wrILbwUVApda6dIjn8";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable To Fetch Your Data. Try Later.");
    }
    return response.json();
  };

  useEffect(() => {
    getAllItems()
      .then((response) => {
        const data = response.results;
        return data;
      })
      .then((data) => {
        const clean = data.map((obj) => new CleanTitle(obj));
        return clean;
      })
      .then((clean) => {
        setAllItems(clean);
      })
      .catch((Error) => {
        console.error("All Items Fetch Error");
      });
  }, []);
  console.log("all", allItems);

  const displayTitles = () => {
    const showTitles = allItems.map((key) => {
      return (
        <Title
          key={key.id}
          nameTitle={key.name}
          titleSection={key.section}
          titleAbs={key.abstract}
          titleUrl={key.url}
          titlePubDate={key.published_date}
          titleImg={key.thumbImg}
        />
      );
    });
    return showTitles;
  };
  return <div>{displayTitles()}</div>;
};
