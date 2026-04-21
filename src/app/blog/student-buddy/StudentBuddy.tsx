"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Code, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

function PhoneMockup({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-[220px] shrink-0">
      <div className="rounded-3xl border-[3px] border-gray-700 overflow-hidden bg-black shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={440}
          height={956}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default function StudentBuddy() {
  useEffect(() => {
    if (window.location.hash === "#download") {
      const el = document.getElementById("download");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 900);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow px-6 md:px-12 pt-12 pb-32 max-w-5xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors mb-20 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-3 mb-8">
            <span className="font-mono text-xs px-3 py-1 border border-accent rounded-full text-accent">
              Android
            </span>
            <span className="font-mono text-xs px-3 py-1 border border-accent rounded-full text-accent">
              Design
            </span>
            <span className="font-mono text-xs px-3 py-1 border border-accent rounded-full text-accent">
              Material 3
            </span>
          </div>

          <h1 className="font-syne text-[6vw] leading-[0.9] tracking-tighter uppercase mb-12">
            Rebuilding Student Companion App
          </h1>

          <div className="flex items-center gap-4 font-mono text-sm text-gray-500 mb-12 pb-8 border-b border-gray-800">
            <span>Apr 10, 2026</span>
            <span>•</span>
            <span>Kartheesan</span>
            {/* <span>•</span>
            <span>6 min read</span> */}
          </div>

          <a
            href="https://github.com/kartheesan05/svce-student-buddy/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 mb-20 px-6 py-4 border border-gray-800 rounded-sm bg-gray-900/50 hover:border-accent/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
              <Download className="w-5 h-5 text-bg" />
            </div>
            <div className="grow">
              <span className="font-syne text-base text-white group-hover:text-accent transition-colors">
                Download Student Buddy
              </span>
              <span className="block font-mono text-xs text-gray-500 mt-0.5">
                Latest APK — Android
              </span>
            </div>
            <ArrowLeft className="w-4 h-4 text-gray-600 rotate-180 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="font-mono text-base md:text-lg leading-relaxed text-gray-300 space-y-8 max-w-3xl">
            <p className="text-xl text-gray-200 leading-relaxed">
              Every student needs a reliable companion app — something to track
              attendance, manage courses, and keep academics organized. I had one,
              but it was showing its age. So I rebuilt it from scratch as Student
              Buddy, powered by Material 3 and dynamic theming.
            </p>

            <h2 className="font-syne text-3xl text-white uppercase mt-16 mb-6">
              The Problem with the Old App
            </h2>
            <p>
              The original student companion app, the &ldquo;SVCE Student Diary&rdquo;, worked. 
              It tracked your schedule and attendance. But the
              UI was a relic. Hard-coded colors, flat layouts with no visual
              hierarchy, and a design language that felt stuck in the Android 4.x
              era. It was functional, but nobody wanted to look at it.
            </p>
            <p>
              The navigation was clunky, the information density was overwhelming,
              and there was zero personality. It did the job, but it felt like a
              chore to use — the exact opposite of what a daily-use app should be.
            </p>
          </div>

          <div className="my-16">
            <p className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-8">
              The old Student Diary
            </p>
            <div className="flex gap-6 overflow-x-auto pb-4 justify-center">
              <PhoneMockup
                src="/screenshots/old-diary/home.png"
                alt="Old Student Diary — Home screen"
              />
              <PhoneMockup
                src="/screenshots/old-diary/schedule.png"
                alt="Old Student Diary — Schedule screen"
              />
            </div>
          </div>

          <div className="font-mono text-base md:text-lg leading-relaxed text-gray-300 space-y-8 max-w-3xl">
            <h2 className="font-syne text-3xl text-white uppercase mt-16 mb-6">
              Enter Material 3 &amp; Dynamic Color
            </h2>
            <p>
              Android&apos;s Material 3 design system was the perfect foundation for
              the rebuild. The standout feature? Dynamic color. On Android 12 and
              above, the app automatically derives its entire color palette from
              the user&apos;s wallpaper. That means Student Buddy feels personal from
              the moment you open it — the accent colors, surfaces, and containers
              all harmonize with whatever wallpaper you&apos;re running.
            </p>
            <p>
              Beyond theming, Material 3 gave me the design vocabulary to create
              clear visual hierarchy. Large top app bars, segmented buttons,
              filled tonal buttons, and proper surface elevation all make the
              interface intuitive without needing a tutorial.
            </p>

          </div>

          <div className="my-16">
            <p className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-8">
              The new Student Buddy
            </p>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
              <PhoneMockup
                src="/screenshots/student-buddy/home-1.png"
                alt="Student Buddy — Home dashboard"
              />
              <PhoneMockup
                src="/screenshots/student-buddy/home-2.png"
                alt="Student Buddy — Home scrolled"
              />
              <PhoneMockup
                src="/screenshots/student-buddy/courses.png"
                alt="Student Buddy — Courses"
              />
              <PhoneMockup
                src="/screenshots/student-buddy/attendance-1.png"
                alt="Student Buddy — Attendance overview"
              />
              <PhoneMockup
                src="/screenshots/student-buddy/attendance-2.png"
                alt="Student Buddy — Attendance detail"
              />
              <PhoneMockup
                src="/screenshots/student-buddy/profile.png"
                alt="Student Buddy — Profile"
              />
            </div>
          </div>

          <div className="font-mono text-base md:text-lg leading-relaxed text-gray-300 space-y-8 max-w-3xl">
            <h2 className="font-syne text-3xl text-white uppercase mt-16 mb-6">
              The Verdict
            </h2>
            <p>
              Rebuilding the student companion app as Student Buddy wasn&apos;t just
              about making it pretty — though it certainly is now. It was about
              respecting the user&apos;s time and taste. Material 3&apos;s dynamic
              theming makes the app feel native to every device, and the
              redesigned information architecture means students spend less time
              navigating and more time staying on top of their academics.
            </p>
            <p>
              If you&apos;re a student looking for a clean, modern companion app —
              or just want to see Material 3 dynamic theming in action — give
              it a try.
            </p>
          </div>

          <div id="download" className="my-16 p-8 border border-gray-800 rounded-sm bg-gray-900/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-syne text-2xl text-white mb-2">
                  Download Student Buddy
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  Available for Android — free and open source.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <a
                  href="https://github.com/kartheesan05/svce-student-buddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-gray-700 text-gray-300 font-mono text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors rounded-sm"
                >
                  <Code className="w-4 h-4" />
                  View Source
                </a>
                <a
                  href="https://github.com/kartheesan05/svce-student-buddy/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
