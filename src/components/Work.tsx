"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Work() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="mb-20">
        <h2 className="font-syne text-[8vw] leading-none uppercase tracking-tighter">
          Selected Work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 relative group"
        >
          <div className="overflow-hidden bg-gray-900 aspect-16/10 relative">
            <Image
              src="/screenshots/hrdb/home.png"
              alt="FORESE HR Database dashboard showing HR contacts, filters, and status tags"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-top scale-110 group-hover:scale-100 opacity-60 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 flex flex-col justify-center"
        >
          <div className="font-mono text-accent mb-4">01 / Featured Project</div>
          <h3 className="font-syne text-4xl md:text-5xl mb-6 uppercase">
            FORESE HR Database
          </h3>
          <p className="font-mono text-gray-400 mb-8 leading-relaxed">
            HR contact management platform used to manage 10000+ HR contacts, used by
            100+ club members. Made for FORESE SVCE as the Technical Head of the club.
          </p>

          <div className="mb-8 border-y border-gray-800 py-6">
            <div className="font-syne text-3xl text-white">100+</div>
            <div className="font-mono text-xs text-gray-500 uppercase mt-1">
              Users
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {["React", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 bg-gray-900 text-gray-300 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://hrdb.kartheesan.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors w-fit group"
          >
            View Project{" "}
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 md:order-2 relative group"
        >
          <div className="overflow-hidden bg-gray-900 aspect-video relative">
            <Image
              src="/screenshots/aptitude/aptitude.png"
              alt="FORESE aptitude mock placement test with section navigation, timer, and reading comprehension question"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-top scale-110 group-hover:scale-100 opacity-60 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 md:order-1 flex flex-col justify-center"
        >
          <div className="font-mono text-accent mb-4">02 / Featured Project</div>
          <h3 className="font-syne text-4xl md:text-5xl mb-6 uppercase">
            Mock Placement Aptitude
          </h3>
          <p className="font-mono text-gray-400 mb-8 leading-relaxed">
            Aptitude test web app for mock placement rounds, built for FORESE
            SVCE. Serves 1000+ students concurrently and uses proctoring
            mechanisms to help prevent cheating.
          </p>

          <div className="mb-8 border-y border-gray-800 py-6">
            <div className="font-syne text-3xl text-white">1000+</div>
            <div className="font-mono text-xs text-gray-500 uppercase mt-1">
              Concurrent users
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {["React", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 bg-gray-900 text-gray-300 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
