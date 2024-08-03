import { Link } from "react-router-dom";

import "./project.scss";

function ProjectCard({ title, detailPage, coverImg, liveDemo, description }) {
  return (
    <div className="projectcard">
      <div className="imgwrapper">
        <Link to={`/${detailPage}`}>
          <img src={`/${coverImg}`} alt="" />
        </Link>
      </div>
      <h4>{title}</h4>
      {/* <div className="description"></div> */}
      <p>{description}</p>
      <div className="projectcardbutton">
        {detailPage && <Link to={`/${detailPage}`}>
          <button>Learn More</button>
        </Link>}
        <a href={liveDemo} target="_blank">
          <button>Live Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
