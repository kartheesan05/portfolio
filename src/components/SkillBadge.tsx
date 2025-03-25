"use client";

import { useState } from "react";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        bg-bw border-2 border-border p-3 
        ${isHovered ? 'bg-[#f8f8f8] translate-x-1 translate-y-1' : ''}
        transition-all duration-150 cursor-default
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {skill}
    </div>
  );
} 