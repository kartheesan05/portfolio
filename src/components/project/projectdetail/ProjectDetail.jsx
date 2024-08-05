import { useNavigate } from "react-router-dom";

import Image from "../Carousel";
import "./projectdetail.scss";

function handleClick() {
  const url = "https://yc.kartheesan.online";
  window.open(url, "_blank");
}

function ProjectDetail() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <>
      <div className="projectdetailcontainer">
        <div onClick={goHome} className="floating-circle">
          <img src="/leftarrow.svg" alt="" className="icon" />
        </div>
        <div className="projectdetail">
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
    </>
  );
}

export default ProjectDetail;
