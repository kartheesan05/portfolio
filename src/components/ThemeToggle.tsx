"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    // Check if there's a theme in localStorage
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Check system preference
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(systemPreference);
    }
  }, []);

  // Update the DOM when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    // Add a class to prevent transitions on first load
    document.documentElement.classList.add('no-transitions');
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
    
    // Remove the class after a short delay
    setTimeout(() => {
      document.documentElement.classList.remove('no-transitions');
    }, 100);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) return null;

  return (
    <Button 
      variant={theme === "light" ? "default" : "neutral"}
      onClick={toggleTheme}
      className="h-10 border-2 border-border shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="flex items-center gap-2">
        {theme === "light" ? (
          <>
            <MoonIcon /> <span className="hidden sm:inline">Dark</span>
          </>
        ) : (
          <>
            <SunIcon /> <span className="hidden sm:inline">Light</span>
          </>
        )}
      </span>
    </Button>
  );
} 