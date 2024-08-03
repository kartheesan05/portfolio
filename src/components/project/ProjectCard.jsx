import {Link} from "react-router-dom";

import "./project.scss";

function ProjectCard({title ,link , coverImg}) {
  return (
    <div className="projectcard">
      <div className="imgwrapper">
        <img src={`/${coverImg}`} alt="" />
      </div>
      <Link to={`/${link}`}>{title}</Link>
    </div>
  );
}

export default ProjectCard;
