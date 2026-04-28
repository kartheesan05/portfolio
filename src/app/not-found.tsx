import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow px-6 md:px-12 pt-12 pb-24 max-w-6xl mx-auto w-full flex flex-col justify-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
          Error 404
        </p>

        <div className="max-w-4xl">
          <h1 className="font-syne text-[20vw] md:text-[12rem] leading-[0.85] tracking-tighter uppercase text-outline">
            Lost
          </h1>

          <h2 className="font-syne text-4xl md:text-6xl leading-[0.95] tracking-tighter uppercase mt-6">
            This page doesn&apos;t exist.
          </h2>

          <p className="mt-8 max-w-2xl font-mono text-base md:text-lg leading-relaxed text-gray-400">
            The link might be broken, the page may have moved, or you may have
            wandered into a part of the portfolio that was never published.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <Link
            href="/"
            className="group flex items-center justify-between gap-6 border border-gray-800 rounded-sm px-6 py-5 hover:border-accent/50 transition-colors"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
                Go Back
              </p>
              <p className="font-syne text-2xl uppercase leading-none group-hover:text-accent transition-colors">
                Portfolio
              </p>
            </div>
            <span className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </span>
          </Link>

          <Link
            href="/blog"
            className="group flex items-center justify-between gap-6 border border-gray-800 rounded-sm px-6 py-5 hover:border-accent/50 transition-colors"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
                Or Explore
              </p>
              <p className="font-syne text-2xl uppercase leading-none group-hover:text-accent transition-colors">
                Blog
              </p>
            </div>
            <span className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
