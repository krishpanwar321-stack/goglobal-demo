import Link from "next/link"

import {
    Globe,
    AtSign,
    Camera,
    Briefcase,
  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#E7DDD1] bg-[#F5EFE6] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">

      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

        {/* BRAND */}

        <div>

        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#d7c4b4] sm:text-3xl">

            Go<span className="text-[#2563EB]">Global</span>

          </h2>

          <p className="mt-5 max-w-sm text-[14px] leading-7 text-[#6B5B52] sm:mt-6 sm:text-[15px]">

            Discover internships, fellowships, scholarships,
            conferences and global opportunities curated for ambitious students.

          </p>

        </div>

        {/* EXPLORE */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
            Explore
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#6B5B52] sm:mt-6 sm:text-[15px]">

          <Link
  href="/explore"
  className="transition-all duration-300 hover:text-[#2563EB]"
>
              Opportunities
            </Link>

            <Link
  href="/categories"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Categories
</Link>

<Link
  href="/events"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Conferences
</Link>

<Link
  href="/events"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Fellowships
</Link>

          </div>

        </div>

        {/* COMPANY */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
            Company
          </h3>

          <div className="mt-6 flex flex-col gap-3 text-[15px] text-[#6B5B52]">

          <Link
  href="/about"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  About
</Link>

<Link
  href="/contact"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Contact
</Link>

<Link
  href="/privacy-policy"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Privacy Policy
</Link>

<Link
  href="/terms"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Terms
</Link>

          </div>

        </div>

        {/* SOCIALS */}


<div>

<h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B7355]">
  Socials
</h3>

<div className="mt-6 flex flex-col gap-3 text-[15px] text-[#6B5B52]">

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#2563EB]">

    <AtSign className="h-[17px] w-[17px]  text-[#8B7355] transition group-hover:text-[#2563EB]" />

    X

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#2563EB]">

    <Briefcase className="h-[17px] w-[17px] text-[#8B7355] transition group-hover:text-[#2563EB]" />

    LinkedIn

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#2563EB]">

    <Camera className="h-[17px] w-[17px] text-[#8B7355] transition group-hover:text-[#2563EB]" />

    Instagram

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#2563EB]">

    <Globe className="h-[17px] w-[17px] text-[#8B7355] transition group-hover:text-[#2563EB]" />

    GitHub

  </button>

</div>

</div>

      </div>

      {/* BOTTOM */}

      <div className="mt-10 flex flex-col gap-4 border-t border-[#E7DDD1] pt-8 text-sm text-[#8B7355] md:mt-12 md:flex-row md:items-center md:justify-between lg:items-center">

        <p>
          © 2026 GoGlobal. All rights reserved.
        </p>

        <p>
        Built for students competing beyond borders.
        </p>
        <p className="font-semibold text-[#2563EB] tracking-[-0.02em]">
  Compete Beyond Borders.
   </p>

      </div>

    </footer>
  )
}
