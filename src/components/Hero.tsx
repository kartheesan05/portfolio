"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-8 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="flex justify-between items-start z-10">
        <div className="font-mono text-sm uppercase tracking-widest">
          Kartheesan <br /> Portfolio © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Available for freelance
        </div>
      </div>

      <div className="z-10 mt-auto">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne text-[14vw] leading-[0.85] tracking-tighter uppercase"
        >
          Kartheesan
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-md font-mono text-sm md:text-base text-gray-400 leading-relaxed"
          >
            CS Student & Full-Stack Engineer specializing in React, Golang, and
            Node.js. Crafting scalable architectures and premium digital
            experiences.
          </motion.p>
          <motion.a
            href="#skills"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center shrink-0 hover:bg-accent hover:border-accent group transition-all duration-300"
          >
            <ArrowDownRight className="text-accent group-hover:text-bg transition-colors duration-300" />
          </motion.a>
        </div>
      </div>

      <div className="absolute top-1/4 right-10 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
