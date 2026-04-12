"use client";

import { motion } from "motion/react";

export default function Experience() {
  const techStack = [
    "Golang",
    "Node.js",
    "Docker",
    "Elasticsearch",
    "Neo4j",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section className="py-32 px-6 md:px-12 border-t border-gray-900">
      <div className="mb-20">
        <h2 className="font-syne text-[8vw] leading-none uppercase tracking-tighter">
          Experience
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="group"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-gray-800 pt-8 pb-12">
          <div className="md:col-span-3 font-mono text-sm text-gray-500 uppercase tracking-widest mt-2">
            Sep 2025 — Present
          </div>
          <div className="md:col-span-9">
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
              <h3 className="font-syne text-3xl md:text-5xl uppercase text-white group-hover:text-accent transition-colors">
                Backend Developer Intern
              </h3>
              <span className="font-mono text-lg text-gray-400 mb-1 md:mb-2">
                @ Freightify
              </span>
            </div>

            <p className="font-mono text-gray-400 leading-relaxed max-w-3xl mb-8">
              Architecting and optimizing backend services, managing complex data
              pipelines, and ensuring high availability across distributed
              systems.
            </p>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 border border-gray-800 rounded-full text-gray-300 group-hover:border-gray-600 group-hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
