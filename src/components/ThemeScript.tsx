"use client";

import { useEffect } from "react";

export default function ThemeScript() {
  useEffect(() => {
    const themeScript = `
      (function() {
        // Check localStorage
        const storedTheme = localStorage.getItem('theme');
        
        // Apply theme or check system preference
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else if (storedTheme === 'light') {
          document.documentElement.classList.remove('dark');
        } else {
          // No stored preference, check system
          const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (systemPreference) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
        }
      })()
    `;

    // Create script element and inject it
    const scriptEl = document.createElement("script");
    scriptEl.innerHTML = themeScript;
    document.head.appendChild(scriptEl);

    return () => {
      document.head.removeChild(scriptEl);
    };
  }, []);

  return null;
} 