import "./about.scss";

function About() {
  return (
    <div className="boxcontainer">
      <div className="aboutWrapper">
        <h1>About Me</h1>
        <p>
          CS Undergrad student at Sri Venkateswara College of engineering.
          Enthusiastic about technology and learning how things work. I like to
          participate in hackathons and build cool stuff. Checkout my github or
          go to <a href="#Projects">projects</a> to see the projects I've worked
          on. My areas of interest include Fullstack Development, Cloud Computing and
          Computer networks. Currently learning the React Js library.
          {/* Pragmatic and amiable individual with a keen interest in full-stack
          development and cloud computing. A technically oriented student
          engaged in passion projects related to web development, with regular
          participation in hackathons. An excellent communicator with a creative
          mindset and proven leadership skills through council experience.
          Actively seeking an internship to further develop skills in full-stack
          and cloud computing, while contributing enthusiasm and innovative
          ideas */}
        </p>
      </div>
    </div>
  );
}

export default About;
