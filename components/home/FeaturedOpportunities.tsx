"use client"

import Link from "next/link"
import {
  Bookmark,
  ArrowUpRight,
  Clock3,
  MapPin,
} from "lucide-react"

const opportunities = [
  {
    title: "Google STEP Internship",
    org: "Google",
    location: "USA",
    type: "Internship",
    deadline: "5 days left",
    tag: "Remote",
  },
  {
    title: "MIT Research Fellowship",
    org: "MIT",
    location: "Boston",
    type: "Research",
    deadline: "Closing Soon",
    tag: "AI",
  },
  {
    title: "UNICEF Youth Program",
    org: "UNICEF",
    location: "Global",
    type: "Fellowship",
    deadline: "12 days left",
    tag: "Impact",
  },
]

export default function FeaturedOpportunities() {
  return (
    <section className="px-10 py-24">

      {/* HEADER */}

      <div className="mb-14 flex items-end justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Featured Opportunities
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-black">

            Explore opportunities
            <span className="block text-zinc-400">
              curated for ambitious students.
            </span>

          </h2>

        </div>

        <Link
          href="/explore"
          className="hidden rounded-2xl border border-zinc-200 px-6 py-3 text-sm font-medium transition hover:border-black md:flex"
        >
          View All
        </Link>

      </div>

      {/* GRID */}

      <div className="grid gap-8 lg:grid-cols-3">

        {opportunities.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-black"
          >

            {/* TOP */}

            <div className="flex items-start justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-lg font-semibold text-black">

                {item.org.charAt(0)}

              </div>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 transition hover:bg-black hover:text-white">

                <Bookmark className="h-5 w-5" />

              </button>

            </div>

            {/* CONTENT */}

            <div className="mt-10">

              <p className="text-sm font-medium text-zinc-500">
                {item.org}
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight text-black">

                {item.title}

              </h3>

            </div>

            {/* TAGS */}

            <div className="mt-6 flex flex-wrap gap-3">

              <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
                {item.type}
              </div>

              <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm">
                {item.tag}
              </div>

            </div>

            {/* INFO */}

            <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">

              <div className="flex items-center gap-2 text-sm text-zinc-500">

                <MapPin className="h-4 w-4" />

                {item.location}

              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-500">

                <Clock3 className="h-4 w-4" />

                {item.deadline}

              </div>

            </div>

            {/* BUTTON */}

            <Link
              href="/explore"
              className="mt-8 flex items-center justify-between rounded-2xl bg-black px-5 py-4 text-sm font-medium text-white transition hover:opacity-90"
            >

              View Opportunity

              <ArrowUpRight className="h-4 w-4" />

            </Link>

          </div>
        ))}

      </div>

    </section>
  )
}