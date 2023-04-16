import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "../home/home";
import { Section } from "../section/Section";
import { SideBar } from "../sideBar/sideBar";
export const App = () => {
  return (
    <main>
      <div className="side-bar">
        <SideBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:section" element={<Section />} />
      </Routes>
    </main>
  );
};
