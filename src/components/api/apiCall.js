export const getAllItems = async () => {
  const url =
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=p2reGHQM99Whk2wrILbwUVApda6dIjn8";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};

// function to create a section Api call

export const getSectionItems = async (section) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=p2reGHQM99Whk2wrILbwUVApda6dIjn8`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};
