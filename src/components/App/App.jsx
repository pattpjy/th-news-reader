import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "../home/home";
import { Section } from "../section/Section";
import { SideBar } from "../sideBar/sideBar";
import { TitlePrev } from "../titlePreview/TitlePrev";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <main>
      <div>
        <Link to="/">
          <i className="fa-light fa-newspaper"></i>
        </Link>
        <h2 className="section-h2">Select section:</h2>
        <div className="side-bar">
          <SideBar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:section" element={<Section />} />
        <Route path="/:section/:title" element={<TitlePrev />} />
      </Routes>
    </main>
  );
};
