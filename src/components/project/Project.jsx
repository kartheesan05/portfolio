import Image from './Carousel'
import './project.scss'

function handleClick(){
  const url = "https://yc.kartheesan.online"; 
  window.open(url, "_blank");
}

function Project() {
  return (
    <>
      <div className="carouselcs">
        <Image />
        <button className="buttoncs my-button" onClick={handleClick}>
          Live Demo
        </button>
      </div>
    </>
  );
}

export default Project