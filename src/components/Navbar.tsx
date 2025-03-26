"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="bg-main border-4 border-border shadow-shadow p-6 w-full md:w-auto transform transition-transform hover:translate-x-1 hover:translate-y-1">
          <Link href="/">
            <h1 className="text-4xl md:text-5xl font-heading">Kartheesan's Portfolio</h1>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="neutral" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full"
          >
            {isMenuOpen ? "Close Menu" : "Menu"}
          </Button>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4">
          <Link href="#about">
            <Button variant="neutral">About</Button>
          </Link>
          <Link href="#projects">
            <Button variant="neutral">Projects</Button>
          </Link>
          <Link href="#skills">
            <Button variant="neutral">Skills</Button>
          </Link>
          <Link href="#contact">
            <Button variant="neutral">Contact</Button>
          </Link>
        </nav>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-4 w-full md:hidden">
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>
              <Button variant="neutral" className="w-full">About</Button>
            </Link>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
              <Button variant="neutral" className="w-full">Projects</Button>
            </Link>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
              <Button variant="neutral" className="w-full">Skills</Button>
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="neutral" className="w-full">Contact</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 