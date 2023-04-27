import "./titlePreview.css";
import { useLocation, Link } from "react-router-dom";

export const TitlePrev = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="preview">
      <h1>{location.state.titleName}</h1>
      <p>{location.state.abstract}</p>
      <div className="btn-container">
        <a className="read-more" href={location.state.titleUrl}>
          Read Full Article
        </a>
        <Link className="backBTN" to={`/${location.state.section}`}>
          Back
        </Link>
      </div>
    </div>
  );
};
