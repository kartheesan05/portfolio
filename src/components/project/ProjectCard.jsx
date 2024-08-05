import { useNavigate } from "react-router-dom";

import "./project.scss";

function ProjectCard({ title, detailPage, coverImg, liveDemo, description }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${detailPage}`);
  }

  return (
    <div className="projectcard">
      <div className="imgwrapper">
        <img src={coverImg} alt="" onClick={handleClick} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="projectcardbutton">
        <button onClick={handleClick}>Learn More</button>
        <a href={liveDemo} target="_blank">
          <button>Live Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
