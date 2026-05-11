import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-10 py-16">

      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

        {/* BRAND */}

        <div>

          <h2 className="text-4xl font-bold tracking-tight text-black">

            Go<span className="text-zinc-400">Global</span>

          </h2>

          <p className="mt-6 max-w-sm text-[15px] leading-8 text-zinc-600">

            Discover internships, fellowships, scholarships,
            conferences and global opportunities curated for ambitious students.

          </p>

        </div>

        {/* EXPLORE */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Explore
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-[15px] text-zinc-700">

            <Link href="/explore">
              Opportunities
            </Link>

            <button className="text-left">
              Categories
            </button>

            <button className="text-left">
              Conferences
            </button>

            <button className="text-left">
              Fellowships
            </button>

          </div>

        </div>

        {/* COMPANY */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Company
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-[15px] text-zinc-700">

            <button className="text-left">
              About
            </button>

            <button className="text-left">
              Contact
            </button>

            <button className="text-left">
              Privacy Policy
            </button>

            <button className="text-left">
              Terms
            </button>

          </div>

        </div>

        {/* SOCIALS */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Socials
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-[15px] text-zinc-700">

            <button className="text-left">
              Twitter
            </button>

            <button className="text-left">
              LinkedIn
            </button>

            <button className="text-left">
              Instagram
            </button>

            <button className="text-left">
              GitHub
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="mt-16 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

        <p>
          © 2026 GoGlobal. All rights reserved.
        </p>

        <p>
          Built for students exploring beyond borders.
        </p>

      </div>

    </footer>
  )
}