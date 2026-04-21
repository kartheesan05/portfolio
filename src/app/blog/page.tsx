import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "Rebuilding Student Companion App — From Outdated UI to Material 3",
    excerpt:
      "The original student companion app was functional but visually stuck in the past. Here's how I rebuilt it from the ground up with Android's Material 3 design system and dynamic color theming.",
    href: "/blog/student-buddy",
    date: "Apr 10, 2026",
    tags: ["Android", "Design", "Material 3"],
  },
];

export const metadata: Metadata = {
  title: "Blog — Kartheesan",
  description: "Articles on software engineering, product design, and development.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow px-6 md:px-12 pt-12 pb-24 max-w-6xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-14">
          <h1 className="font-syne text-[10vw] leading-[0.9] tracking-tighter uppercase">
            Insights
          </h1>
          <p className="max-w-xl font-mono text-sm md:text-base text-gray-400 leading-relaxed">
            Writing about software, design systems, and building products with
            attention to performance, usability, and craft.
          </p>
        </div>

        <div className="border-t border-gray-800">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="block group">
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-10 border-b border-gray-800">
                <div className="md:col-span-2 font-mono text-sm text-gray-500">
                  {post.date}
                </div>

                <div className="md:col-span-6">
                  <h2 className="font-syne text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 border border-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-between h-full">
                  <p className="font-mono text-sm text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-8 flex justify-end">
                    <span className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
