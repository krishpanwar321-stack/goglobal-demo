import Link from "next/link"

import {
    Globe,
    AtSign,
    Camera,
    Briefcase,
  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-14">

      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

        {/* BRAND */}

        <div>

          <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">

            Go<span className="text-zinc-400">Global</span>

          </h2>

          <p className="mt-5 max-w-sm text-[14px] leading-7 text-zinc-600 sm:mt-6 sm:text-[15px]">

            Discover internships, fellowships, scholarships,
            conferences and global opportunities curated for ambitious students.

          </p>

        </div>

        {/* EXPLORE */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Explore
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-[14px] text-zinc-700 sm:mt-6 sm:text-[15px]">

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

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-black">

    <AtSign className="h-4 w-4 text-zinc-500 transition group-hover:text-black" />

    X

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-black">

    <Briefcase className="h-4 w-4 text-zinc-500 transition group-hover:text-black" />

    LinkedIn

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-black">

    <Camera className="h-4 w-4 text-zinc-500 transition group-hover:text-black" />

    Instagram

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-black">

    <Globe className="h-4 w-4 text-zinc-500 transition group-hover:text-black" />

    GitHub

  </button>

</div>

</div>

      </div>

      {/* BOTTOM */}

      <div className="mt-10 flex flex-col gap-4 border-t border-zinc-100 pt-8 text-sm text-zinc-500 md:mt-12 md:flex-row md:items-center md:justify-between lg:items-center">

        <p>
          © 2026 GoGlobal. All rights reserved.
        </p>

        <p>
          Built for students exploring beyond borders.
        </p>
        <p className="font-medium text-zinc-400">
  Compete Beyond Borders.
   </p>

      </div>

    </footer>
  )
}
