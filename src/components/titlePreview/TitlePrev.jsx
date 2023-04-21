import "./titlePreview.css";
import { useLocation } from "react-router-dom";

export const TitlePrev = () => {
  const location = useLocation();
  return (
    <div className="preview">
      <h1>{location.state.titleName}</h1>
      <p>{location.state.abstract}</p>
      <a className="read-more" href={location.state.titleUrl}>
        Read Full Article
      </a>
    </div>
  );
};
