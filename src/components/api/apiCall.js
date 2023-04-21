import CleanTitle from "../api/cleanTitle";
const apiKey = import.meta.env.VITE_API_KEY;

const fetchApiData = async (section) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};

export const getTopTitle = async () => {
  const topTitles = await fetchApiData("home");
  const data = topTitles.results.map(
    (obj, index) => new CleanTitle(obj, index)
  );
  return data;
};

export const getSectionTitle = async (section) => {
  const sectionTitles = await fetchApiData(section);
  const data = sectionTitles.results.map(
    (obj, index) => new CleanTitle(obj, index)
  );
  return data;
};
