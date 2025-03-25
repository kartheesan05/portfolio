"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  bgColor: string;
  link?: string;
  buttonText?: string;
}

export default function ProjectCard({
  title,
  description,
  bgColor,
  link = "#",
  buttonText = "View Project"
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-bw border-4 border-border ${isHovered ? 'translate-x-boxShadowX translate-y-boxShadowY shadow-none' : 'shadow-shadow'} transition-all duration-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`h-48 border-b-4 border-border flex items-center justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        <p>Project Image</p>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-heading mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <Link href={link}>
          <Button size="sm">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
} 