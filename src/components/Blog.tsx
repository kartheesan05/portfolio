"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gray-950">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="font-syne text-[8vw] leading-none uppercase tracking-tighter">
          Insights
        </h2>
        <button className="font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors pb-2 border-b border-gray-700 hover:border-accent">
          Read All Articles
        </button>
      </div>

      <Link href="/blog/student-buddy" className="block">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group cursor-pointer"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-gray-800 pt-8">
            <div className="md:col-span-2 font-mono text-sm text-gray-500">
              Apr 10, 2026
            </div>
            <div className="md:col-span-6">
              <h3 className="font-syne text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors">
                Rebuilding Student Companion App — From Outdated UI to Material 3
              </h3>
              <div className="flex gap-3 mt-6">
                <span className="font-mono text-xs px-3 py-1 border border-gray-800 rounded-full">
                  Android
                </span>
                <span className="font-mono text-xs px-3 py-1 border border-gray-800 rounded-full">
                  Design
                </span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-between h-full">
              <p className="font-mono text-sm text-gray-400 leading-relaxed line-clamp-3">
                The original student companion app was functional but visually
                stuck in the past. Here&apos;s how I rebuilt it from the ground up
                with Android&apos;s Material 3 design system, dynamic color theming,
                and a UI that finally feels at home on modern devices...
              </p>
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
