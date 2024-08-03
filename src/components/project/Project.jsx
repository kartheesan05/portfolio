import "./project.scss";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="projectcontainer">
      <h1>Projects</h1>
      <div className="projectcardcontainer">
        <ProjectCard title={'YelpCamp'} coverImg={'yc1.png'} link={'yelpcamp'} />
        <ProjectCard title={''} coverImg={''} link={''}/>
        <ProjectCard title={''} coverImg={''} link={''}/>
      </div>
    </div>
  );
}

export default Project;
