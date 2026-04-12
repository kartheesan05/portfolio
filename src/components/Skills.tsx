"use client";

import { motion } from "motion/react";

const skills = [
  "React",
  "Golang",
  "Node.js",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "AWS",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 border-t border-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h2 className="font-syne text-2xl uppercase">The Arsenal</h2>
        </div>
        <div className="md:col-span-3">
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 border border-gray-700 rounded-full font-mono text-lg hover:bg-accent hover:text-bg hover:border-accent transition-colors duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
