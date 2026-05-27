import Link from "next/link"

import {
    Globe,
    AtSign,
    Camera,
    Briefcase,
  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-14">

      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

        {/* BRAND */}

        <div>

        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#0F172A] sm:text-3xl">

            Go<span className="text-[#2563EB]">Global</span>

          </h2>

          <p className="mt-5 max-w-sm text-[14px] leading-7 text-[#475569] sm:mt-6 sm:text-[15px]">

            Discover internships, fellowships, scholarships,
            conferences and global opportunities curated for ambitious students.

          </p>

        </div>

        {/* EXPLORE */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Explore
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#475569] sm:mt-6 sm:text-[15px]">

          <Link
  href="/explore"
  className="transition-all duration-300 hover:text-[#3B82F6]"
>
              Opportunities
            </Link>

            <Link
  href="/categories"
  className="text-left transition-all duration-300 hover:text-[#3B82F6]"
>
  Categories
</Link>

<Link
  href="/events"
  className="text-left transition-all duration-300 hover:text-[#3B82F6]"
>
  Conferences
</Link>

<Link
  href="/events"
  className="text-left transition-all duration-300 hover:text-[#3B82F6]"
>
  Fellowships
</Link>

          </div>

        </div>

        {/* COMPANY */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Company
          </h3>

          <div className="mt-6 flex flex-col gap-3 text-[15px] text-[#475569]">

          <Link
  href="/about"
  className="text-left  transition-all duration-300 hover:text-[#3B82F6]"
>
  About
</Link>

<Link
  href="/contact"
  className="text-left transition-all duration-300 hover:text-[#3B82F6]"
>
  Contact
</Link>

<Link
  href="/privacy-policy"
  className="text-left transition-all duration-300 hover:text-[#3B82F6]"
>
  Privacy Policy
</Link>

<Link
  href="/terms"
  className="text-left transition-all duration-300 hover:text-[#3B82F6]"
>
  Terms
</Link>

          </div>

        </div>

        {/* SOCIALS */}


<div>

<h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748B]">
  Socials
</h3>

<div className="mt-6 flex flex-col gap-3 text-[15px] text-[#475569]">

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#3B82F6]">

    <AtSign className="h-[17px] w-[17px]  text-[#64748B] transition group-hover:text-[#3B82F6]" />

    X

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#3B82F6]">

    <Briefcase className="h-[17px] w-[17px] text-[#64748B] transition group-hover:text-[#3B82F6]" />

    LinkedIn

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#3B82F6]">

    <Camera className="h-[17px] w-[17px] text-[#64748B] transition group-hover:text-[#3B82F6]" />

    Instagram

  </button>

  <button className="group flex items-center gap-3 text-left transition-all duration-300 hover:translate-x-1 hover:text-[#3B82F6]">

    <Globe className="h-[17px] w-[17px] text-[#64748B] transition group-hover:text-[#3B82F6]" />

    GitHub

  </button>

</div>

</div>

      </div>

      {/* BOTTOM */}

      <div className="mt-10 flex flex-col gap-4 border-t border-[#E2E8F0] pt-8 text-sm text-[#64748B] md:mt-12 md:flex-row md:items-center md:justify-between lg:items-center">

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
