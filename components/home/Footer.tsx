import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-10 py-14">

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

        {/* BRAND */}

        <div>

          <h2 className="text-3xl font-bold tracking-tight text-black">

            Go<span className="text-zinc-400">Global</span>

          </h2>

          <p className="mt-6 max-w-sm text-[15px] leading-7 text-zinc-600">

            Discover internships, fellowships, scholarships,
            conferences and global opportunities curated for ambitious students.

          </p>

        </div>

        {/* EXPLORE */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Explore
          </h3>

          <div className="mt-6 flex flex-col gap-3 text-[15px] text-zinc-700">

            <Link href="/explore">
              Opportunities
            </Link>

            <button className="text-left transition-colors hover:text-black"> 
              Categories
            </button>

            <button className="text-left transition-colors hover:text-black">
              Conferences
            </button>

            <button className="text-left transition-colors hover:text-black">
              Fellowships
            </button>

          </div>

        </div>

        {/* COMPANY */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Company
          </h3>

          <div className="mt-6 flex flex-col gap-3 text-[15px] text-zinc-700">

            <button className="text-left transition-colors hover:text-black">
              About
            </button>

            <button className="text-left transition-colors hover:text-black">
              Contact
            </button>

            <button className="text-left transition-colors hover:text-black">
              Privacy Policy
            </button>

            <button className="text-left transition-colors hover:text-black">
              Terms
            </button>

          </div>

        </div>

        {/* SOCIALS */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Socials
          </h3>

          <div className="mt-6 flex flex-col gap-3 text-[15px] text-zinc-700">

            <button className="text-left transition-colors hover:text-black">
              Twitter
            </button>

            <button className="text-left transition-colors hover:text-black">
              LinkedIn
            </button>

            <button className="text-left transition-colors hover:text-black">
              Instagram
            </button>

            <button className="text-left transition-colors hover:text-black">
              GitHub
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="mt-12 flex flex-col gap-3 border-t border-zinc-100 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:items-center">

        <p>
          © 2026 GoGlobal. All rights reserved.
        </p>

        <p>
          Built for students exploring beyond borders.
        </p>
        <p className="text-zinc-400">
  Compete Beyond Borders.
   </p>

      </div>

    </footer>
  )
}