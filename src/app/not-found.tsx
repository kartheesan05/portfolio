import Link from 'next/link'
import { getTitleBoxClasses, getContentBoxClasses } from "@/lib/neobrutalism"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg p-8 md:p-16 flex items-center justify-center">
      <div className={getContentBoxClasses() + " max-w-2xl w-full text-center py-16"}>
        <div className="mb-8">
          <h1 className="text-8xl font-heading mb-4">404</h1>
          <div className="inline-block bg-main px-4 py-2 border-2 border-border shadow-neobrutalism rotate-2">
            Page Not Found
          </div>
        </div>
        
        <p className="text-xl mb-8">
          Oops! Looks like you've ventured into uncharted territory.
        </p>

        <Link href="/">
          <Button className="text-lg">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </main>
  )
} 