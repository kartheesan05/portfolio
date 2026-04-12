import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Work />
      <Blog />
      <Footer />
    </>
  );
}
