"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ContactForm from "@/components/ContactForm";
import { getTitleBoxClasses, getContentBoxClasses } from "@/lib/neobrutalism";
import Link from "next/link";
import { useToast } from '@/hooks/use-toast'


export default function Home() {

  const { toast } = useToast();
  const skills = [
    "Full-stack Development",
    "React",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "TensorFlow",
    "Cloud Computing",
    "CI/CD",
    "Flutter",
    "Machine Learning",
    "TypeScript"
  ];

  return (
    <main className="min-h-screen bg-bg p-8 md:p-16">
      <Navbar />

      {/* Hero Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 justify-center">
            <h2 className="text-6xl font-heading">
            CS Student and <span className="bg-main px-2">Developer</span>
            </h2>
            <p className="text-xl">
              I build beautiful, interactive, and performant web applications 
              with a focus on user experience and modern design. I also have interests in machine learning.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#projects">
                <Button>View Projects</Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button variant="neutral">Get Resume</Button>
              </Link>
            </div>
          </div>
          <div className={getContentBoxClasses() + " flex items-center justify-center h-[400px] relative overflow-hidden"}>
            <div className="w-full h-full bg-neutral-100 p-6 font-mono text-sm overflow-hidden">
              <pre className="text-left">
                <code className="text-xs md:text-sm">
                  <span className="text-blue-600">const</span> <span className="text-green-600">Profile</span> = () =&gt; {'{'}
                  <br />  <span className="text-blue-600">const</span> <span className="text-purple-600">skills</span> = [<span className="text-orange-600">'React'</span>, <span className="text-orange-600">'Next.js'</span>, <span className="text-orange-600">'TypeScript'</span>];
                  <br />  <span className="text-blue-600">const</span> <span className="text-purple-600">learning</span> = [<span className="text-orange-600">'ML'</span>, <span className="text-orange-600">'Cloud'</span>];
                  <br />
                  <br />  <span className="text-blue-600">return</span> (
                  <br />    &lt;<span className="text-green-600">div</span> <span className="text-purple-600">className</span>=<span className="text-orange-600">"profile"</span>&gt;
                  <br />      &lt;<span className="text-green-600">h1</span>&gt;Kartheesan&lt;/<span className="text-green-600">h1</span>&gt;
                  <br />      &lt;<span className="text-green-600">p</span>&gt;CS Student & Developer&lt;/<span className="text-green-600">p</span>&gt;
                  <br />      {'{'}skills.<span className="text-yellow-600">map</span>(<span className="text-purple-600">skill</span> =&gt; (
                  <br />        &lt;<span className="text-green-600">Badge</span> <span className="text-purple-600">key</span>={'{'}skill{'}'}&gt;{'{'}skill{'}'}&lt;/<span className="text-green-600">Badge</span>&gt;
                  <br />      )){'}'}
                  <br />    &lt;/<span className="text-green-600">div</span>&gt;
                  <br />  );
                  <br />{'}'}
                </code>
              </pre>
              <div className="absolute bottom-6 right-6 text-lg font-bold text-gray-800 bg-main px-2 py-1 border-2 border-border shadow-neobrutalism rotate-3">
                Hello, World!
              </div>
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
              Hi there! I'm a pragmatic and technically oriented full-stack developer with a keen interest in cloud computing and web development. Currently pursuing B.E in Computer Science and Engineering at Sri Venkateswara College of Engineering.
            </p>
            <p className="mb-4">
              As Tech Head at FORESE and Senior Web Developer at Know-I, I've developed and maintained various web applications using React, Node.js, and MongoDB. I have experience in implementing CI/CD pipelines and deploying applications to cloud platforms.
            </p>
            <p>
              I'm passionate about building innovative solutions, from web applications to machine learning projects. When I'm not coding, you can find me participating in hackathons, leading technical teams, and exploring new technologies in full-stack development.
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
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span>kartheesan2005@gmail.com</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('kartheesan2005@gmail.com');
                    toast({
                      title: "Email copied to clipboard",
                      // description: "You can now paste it into your email client"
                    });
                  }}
                  className="p-2 hover:bg-main rounded-base transition-colors"
                  title="Copy email"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span>+91 6382058580</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('+916382058580');
                    toast({
                      title: "Phone number copied to clipboard",
                      // description: "You can now paste it into your phone client"
                    });
                  }}
                  className="p-2 hover:bg-main rounded-base transition-colors"
                  title="Copy phone"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://linkedin.com/in/kartheesan05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <span>linkedin.com/in/kartheesan05</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://github.com/kartheesan05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-main border-2 border-border flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </div>
                  <span>github.com/kartheesan05</span>
                </a>
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
          <p className="text-lg font-heading">© {new Date().getFullYear()} Kartheesan's Portfolio</p>
          <div className="flex gap-4">
            <Button variant="reverse" size="sm">
              <a href="https://github.com/kartheesan05" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
            <Button variant="reverse" size="sm">
              <a href="https://www.linkedin.com/in/kartheesan05/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button variant="reverse" size="sm">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
            {/* <Button variant="reverse" size="sm">Twitter</Button> */}
          </div>
        </div>
      </footer>
    </main>
  );
}
