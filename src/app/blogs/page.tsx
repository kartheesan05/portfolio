import React from 'react'
import { getTitleBoxClasses, getContentBoxClasses } from "@/lib/neobrutalism";

function Blogs() {
  return (
    <main className="min-h-screen bg-bg p-8 md:p-16">
      <div className={getTitleBoxClasses() + " mb-8"}>
        <h1 className="text-4xl font-heading">Blog Posts</h1>
      </div>
      
      <div className={getContentBoxClasses() + " flex flex-col items-center justify-center py-16"}>
        <h2 className="text-3xl font-heading mb-4">Coming Soon!</h2>
        <p className="text-xl text-center max-w-md">
          I'm working on some interesting articles about web development, 
          machine learning, and tech insights. Stay tuned!
        </p>
        <div className="mt-8 rotate-3 bg-main px-4 py-2 border-2 border-border shadow-neobrutalism">
          📝 Under Construction
        </div>
      </div>
    </main>
  )
}

export default Blogs