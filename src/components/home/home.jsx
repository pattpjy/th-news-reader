import { useState, useEffect } from "react";
import { Title } from "../title/title";

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
        setAllItems(response.results);
      })
      .catch((Error) => {
        console.error("All Items Fetch Error");
      });
  }, []);
  console.log(allItems);

  const displayTitles = () => {
    const showTitles = allItems.map((key) => {
      return (
        <Title
          nameTitle={key.title}
          titleSection={key.section}
          titlePubDate={key.published_date}
        />
      );
    });
    return showTitles;
  };
  return <div>{displayTitles()}</div>;
};
