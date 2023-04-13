import { NavLink } from "react-router-dom";
import "./sideBar.css";

export const SideBar = ({ getSection }) => {
  const onclickHandler = (section) => {
    getSection(section);
  };
  //list array for section
  //function to create button using map
  //onclick method to render a list from apiCall
  return (
    <NavLink className="nav-box">
      <button
        onClick={(e) => {
          onclickHandler("home");
        }}
      >
        Home
      </button>
      <button
        onClick={(e) => {
          onclickHandler("movies");
        }}
      >
        Movie
      </button>
      <button
        onClick={(e) => {
          onclickHandler("business");
        }}
      >
        Business
      </button>
      <button
        onClick={(e) => {
          onclickHandler("fashion");
        }}
      >
        Fashion
      </button>
    </NavLink>
  );
};
