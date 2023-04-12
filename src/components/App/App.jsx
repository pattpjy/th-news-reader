import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "../home/home";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
