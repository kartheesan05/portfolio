import "./globals.css";
import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Jerry's Portfolio - Creative Developer",
  description: "Personal portfolio website showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inline script to avoid FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  let theme;
                  try {
                    theme = localStorage.getItem('theme');
                  } catch (err) {}
                  
                  return theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                }
                
                const theme = getThemePreference();
                document.documentElement.classList.toggle('dark', theme === 'dark');
                
                // Add this to prevent transitions on page load
                document.documentElement.classList.add('no-transitions');
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    document.documentElement.classList.remove('no-transitions');
                  }, 100);
                });
              })()
            `,
          }}
        />
      </head>
      <body className={`antialiased ${spaceGrotesk.variable} font-sans bg-bg text-text`}>
        {children}
      </body>
    </html>
  );
}
