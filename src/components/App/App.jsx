import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "../home/home";
import { Title } from "../title/title";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/titleDetails/:id" element={<Title />} />
      </Routes>
    </main>
  );
}

export default App;
