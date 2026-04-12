"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-gray-900 overflow-hidden relative">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne text-[12vw] leading-none uppercase tracking-tighter text-outline cursor-pointer"
        >
          Let&apos;s Talk
        </motion.h2>
        <p className="font-mono text-gray-500 mt-8 max-w-md">
          Currently open for new opportunities and freelance projects.
          Let&apos;s build something extraordinary together.
        </p>
        <a
          href="mailto:kartheesan2005@gmail.com"
          className="mt-8 font-mono text-lg text-accent hover:underline underline-offset-8"
        >
          kartheesan2005@gmail.com
        </a>
      </div>

      <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-gray-600 uppercase tracking-widest">
        <div>© {new Date().getFullYear()} Kartheesan. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="https://github.com/kartheesan05" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kartheesan05/" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/kartheesan05" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
