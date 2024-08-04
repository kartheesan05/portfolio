import "./project.scss";
import ProjectCard from "./ProjectCard";

const host =
  "https://raw.githubusercontent.com/kartheesan05/assets/main/portfolio/";

function Project() {
  return (
    <div className="projectcontainer">
      <h1>Projects</h1>
      <div className="projectcardcontainer">
        <ProjectCard
          title={"YelpCamp"}
          coverImg={host + "yc1.png"}
          detailPage={"yelpcamp"}
          liveDemo={"https://yc.kartheesan.online"}
          description={
            "A full stack web app with CRUD funtionality and RESTful API"
          }
        />
        <ProjectCard
          title={"Timer Game"}
          coverImg={host + "timer.png"}
          liveDemo={"https://timergame.kartheesan.online"}
          description={
            "A game where you try guess and stop the timer with as least time left"
          }
        />
        <ProjectCard
          title={"Tic Tac Toe"}
          coverImg={host + "ttt.png"}
          liveDemo={"https://ttt.kartheesan.online"}
          description={"A two player Tic Tac Toe game built using React Js"}
        />
      </div>
    </div>
  );
}

export default Project;
