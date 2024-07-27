import "./app.scss";
import Hero from "./components/hero/Hero";
// import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Project from "./components/project/Project";

function App() {
  return (
    <div>
      <section id="Home">
        {/* <Navbar /> */}
        <Sidebar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section><About/></section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <section><Project/></section>
      {/* <section><Project/></section>
      <section><Project/></section> */}
      <section id="Contact">Contact</section>
      
    </div>
  );
}

export default App;
