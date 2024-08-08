import "./app.scss";
import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/Contact/Contact";
// import Skills from "./components/skills/Skills";

function Home() {
  return (
    <div>
      <section id="Home" className="boxcontainer">
        {/* <Sidebar /> */}
        <Hero />
      </section>

      <section id="About" className="boxcontainer">
        <About />
      </section>
      {/* <section id="Skills">
        <Skills />
      </section> */}
      <section id="Projects" className="boxcontainer">
        <Project />
      </section>
      {/* <section id="Contact" className="boxcontainer">
        <Contact />
      </section> */}
    </div>
  );
}

export default Home;
