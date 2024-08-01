import "./app.scss";
import Hero from "./components/hero/Hero";
// import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <section id="Home" className="boxcontainer">
        {/* <Navbar /> */}
        <Sidebar />
        <Hero />
      </section>
      {/* <section>
        <Parallax type="about" />
      </section> */}
      <section id="About" className="boxcontainer">
        <About />
      </section>
      {/* <section>
        <Parallax type="projects" />
      </section> */}
      <section id="Projects" className="boxcontainer">
        <Project />
      </section>
      {/* <section><Project/></section>
      <section><Project/></section> */}
      <section id="Contact" className="boxcontainer">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
