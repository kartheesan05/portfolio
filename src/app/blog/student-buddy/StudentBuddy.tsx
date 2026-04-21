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
              Every student needs that one app they keep coming back to — to check
              attendance, courses, schedules, all of that. I already had one, but
              over time it just started to feel... outdated. It worked, sure, but
              using it wasn&apos;t exactly pleasant.
            </p>
            <p>
              So I decided to rebuild it from scratch as <b>Student Buddy</b>,
              this time focusing just as much on how it feels as how it works.
            </p>

            <h2 className="font-syne text-3xl text-white uppercase mt-16 mb-6">
              The Problem with the Old App
            </h2>
            <p>
              The old app, &ldquo;SVCE Student Diary&rdquo;, did what it was supposed to do. You
              could check your schedule, track attendance — the basics were
              covered.
            </p>
            <p>
              But everything else felt stuck in the past.
            </p>
            <p>
              The UI had hard-coded colors, flat layouts, and no real sense of
              structure. It looked like something straight out of the Android 4.x
              days. On top of that, navigation felt clunky and the screens were
              packed with too much information at once.
            </p>
            <p>
              It wasn&apos;t broken, but it wasn&apos;t something you&apos;d <i>want</i> to use
              either. And for an app you open almost every day, that matters more
              than you&apos;d think.
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
              When I started rebuilding, Material 3 felt like the obvious choice.
            </p>
            <p>
              The biggest win was dynamic color. On Android 12+, the app
              automatically picks up colors from your wallpaper and builds the
              entire theme around it. It sounds like a small thing, but it makes
              the app feel way more personal right away.
            </p>
            <p>
              Beyond that, Material 3 gave me a solid design system to work with
              — better hierarchy, cleaner layouts, and components that actually
              guide the user instead of confusing them. Things like large top
              bars, proper spacing, and clearer grouping made a huge difference.
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
              Rebuilding this app wasn&apos;t just about making it look better — it
              was about making it <i>feel</i> better to use.
            </p>
            <p>
              Now it actually feels like something that belongs on your phone,
              not something you&apos;re forced to open. Navigation is simpler,
              information is easier to scan, and overall it just gets out of your
              way.
            </p>
            <p>
              If you&apos;re a student and want something clean and modern to keep
              track of your academics — or if you&apos;re just curious about Material
              3 in action — give it a try.
            </p>
          </div>

          <div id="download" className="my-16 p-8 border border-gray-800 rounded-sm bg-gray-900/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-syne text-2xl text-white mb-2">
                  Download Student Buddy
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  Available for Android — free and open source
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
