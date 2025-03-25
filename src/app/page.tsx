import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ContactForm from "@/components/ContactForm";
import { getTitleBoxClasses, getContentBoxClasses } from "@/lib/neobrutalism";
import Link from "next/link";

export default function Home() {
  const skills = [
    "React", 
    "Next.js", 
    "TypeScript", 
    "TailwindCSS", 
    "JavaScript", 
    "Node.js", 
    "UI/UX Design", 
    "Responsive Design"
  ];

  return (
    <main className="min-h-screen bg-bg p-8 md:p-16">
      <Navbar />

      {/* Hero Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 justify-center">
            <h2 className="text-6xl font-heading">
              Creative <span className="bg-main px-2">Developer</span>
            </h2>
            <p className="text-xl">
              I build beautiful, interactive, and performant web applications 
              with a focus on user experience and modern design.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#projects">
                <Button>View Projects</Button>
              </Link>
              <Link href="#contact">
                <Button variant="neutral">Contact Me</Button>
              </Link>
            </div>
          </div>
          <div className={getContentBoxClasses() + " flex items-center justify-center h-[400px]"}>
            <div className="text-center">
              <p className="text-lg mb-2">Profile Image</p>
              <p className="text-sm">(Placeholder for your photo)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Showcase Section */}
      <section className="mb-24">
        <div className={getTitleBoxClasses() + " mb-8"}>
          <h2 className="text-4xl font-heading">Try Dark Mode!</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={getContentBoxClasses()}>
            <h3 className="text-2xl font-heading mb-4">Light & Dark Themes</h3>
            <p className="mb-4">
              This portfolio features a beautiful Neobrutalism design with both light and dark themes. Try toggling the theme using the button in the top-right corner!
            </p>
            <p>
              The theme automatically adapts to your system preference but can be manually changed at any time. Your preference will be saved for your next visit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#272933] border-4 border-border shadow-shadow p-6 flex items-center justify-center">
              <span className="text-lg font-medium">Light Mode</span>
            </div>
            <div className="bg-[#272933] dark:bg-white text-white dark:text-black border-4 border-border shadow-shadow p-6 flex items-center justify-center">
              <span className="text-lg font-medium">Dark Mode</span>
            </div>
            <div className="bg-main border-4 border-border shadow-shadow p-6 flex items-center justify-center">
              <span className="text-lg font-medium text-mtext">Primary Color</span>
            </div>
            <div className="bg-bw border-4 border-border shadow-shadow p-6 flex items-center justify-center">
              <span className="text-lg font-medium">Content Box</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mb-24 scroll-mt-16">
        <div className={getTitleBoxClasses() + " mb-8"}>
          <h2 className="text-4xl font-heading">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Project One" 
            description="A description of your first amazing project goes here." 
            bgColor="#FFC0CB" 
          />
          
          <ProjectCard 
            title="Project Two" 
            description="A description of your second awesome project goes here." 
            bgColor="#98FB98" 
          />
          
          <ProjectCard 
            title="Project Three" 
            description="A description of your third fantastic project goes here." 
            bgColor="#ADD8E6" 
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-24 scroll-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={getContentBoxClasses()}>
            <h2 className="text-4xl font-heading mb-6">About Me</h2>
            <p className="mb-4">
              Hi there! I'm a passionate web developer with expertise in React, Next.js, and modern front-end technologies.
            </p>
            <p className="mb-4">
              I love creating unique digital experiences with clean code and innovative design solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
          <div id="skills" className={getTitleBoxClasses() + " scroll-mt-16"}>
            <h2 className="text-4xl font-heading mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16 scroll-mt-16">
        <div className={getTitleBoxClasses() + " mb-8"}>
          <h2 className="text-4xl font-heading">Get In Touch</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={getContentBoxClasses()}>
            <p className="mb-6 text-xl">
              Interested in working together? Feel free to reach out through any of these channels.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">📧</div>
                <span>email@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">📱</div>
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">🔗</div>
                <span>linkedin.com/in/yourprofile</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">🐙</div>
                <span>github.com/yourusername</span>
              </div>
            </div>
          </div>
          
          <div className={getContentBoxClasses()}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={getTitleBoxClasses()}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg font-heading">© 2025 Jerry's Portfolio</p>
          <div className="flex gap-4">
            <Button variant="noShadow" size="sm">GitHub</Button>
            <Button variant="noShadow" size="sm">LinkedIn</Button>
            <Button variant="noShadow" size="sm">Twitter</Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
