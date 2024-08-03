import Image from "./Carousel";
import "./project.scss";

function handleClick() {
  const url = "https://yc.kartheesan.online";
  window.open(url, "_blank");
}

function ProjectDetail() {
  return (
    <div className="projectdetail">
      <div className="projectcontainer">
        <h1 className="projecth1">Yelp Camp</h1>
        <div className="carouselcs">
          <Image />
          <button className="buttoncs my-button" onClick={handleClick}>
            Live Demo
          </button>
          <p>
            A fullstack website with CRUD functionality, User registration,
            authentication and authorization
          </p>
        </div>
      </div>
     </div>
  );
}

export default ProjectDetail;
