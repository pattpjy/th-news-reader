import "./titlePreview.css";
import { useLocation } from "react-router-dom";

export const TitlePrev = () => {
  const location = useLocation();
  return (
    <div>
      <h1>{location.state.titleName}</h1>
      <p>{location.state.abstract}</p>
    </div>
  );
};