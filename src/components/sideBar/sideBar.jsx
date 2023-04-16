import { NavLink } from "react-router-dom";
import "./sideBar.css";
import { Link, useLocation } from "react-router-dom";

export const SideBar = ({ getSection }) => {
  const location = useLocation();
  console.log(location);
  const onclickHandler = (section) => {
    getSection(section);
  };
  //list array for section
  const queryKeys = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world",
  ];

  //function to create button using map
  const makeSection = () => {
    const sectionLinks = queryKeys.map((section, index) => {
      return (
        <Link to={`/${section}`} key={index} className="section-link">
          {section}
        </Link>
      );
    });
    return sectionLinks;
  };
  //onclick method to render a list from apiCall
  return <div className="nav-box">{makeSection()}</div>;
};
