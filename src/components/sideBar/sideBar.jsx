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
        <i class="fa-solid fa-house"></i>
        Tops
      </button>
      <button
        onClick={(e) => {
          onclickHandler("movies");
        }}
      >
        <i class="fa-solid fa-film"></i>
        Movie
      </button>
      <button
        onClick={(e) => {
          onclickHandler("business");
        }}
      >
        <i class="fa-solid fa-chart-line-up"></i>
        Business
      </button>
      <button
        onClick={(e) => {
          onclickHandler("fashion");
        }}
      >
        <i class="fa-solid fa-clothes-hanger"></i>
        Fashion
      </button>
    </NavLink>
  );
};
