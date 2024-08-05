import { useNavigate } from "react-router-dom";

import "./project.scss";

function ProjectCard({ title, detailPage, coverImg, liveDemo, description }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${detailPage}`);
  }

  function handleDemoClick() {
    window.open(liveDemo);
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
        <button onClick={handleDemoClick}>Live Demo</button>
      </div>
    </div>
  );
}

export default ProjectCard;
