"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
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

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false)

    }, 1200)

    return () => clearTimeout(timer)

  }, [])


  return (
    <section className="px-10 py-20">

      {/* HEADER */}

      <div className="mb-10 flex items-end justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#475569]">
            Featured Opportunities
          </p>

          <h2 className="mt-4 text-4xl xl:text-5xl font-bold leading-[1.08] tracking-tight">

            Explore global opportunities
            <span className="mt-1 block text-[#3B82F6]">
              Curated for ambitious students.
            </span>

          </h2>

        </div>

        <Link
          href="/explore"
          className="hidden rounded-2xl border border-zinc-200 px-6 py-3 text-sm font-medium transition hover:border-[#3B82F6] hover:text-[#3B82F6] md:flex"
        >
          View All
        </Link>

      </div>

      {/* GRID */}

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-3">

      {loading
  ? Array.from({ length: 3 }).map((_, index) => (

      <div
        key={index}
        className="min-w-[320px] shrink-0 overflow-hidden rounded-3xl bg-white p-6 shadow-sm lg:min-w-0"
      >

        <div className="animate-pulse">

          <div className="flex items-start justify-between">

            <div className="h-12 w-12 rounded-2xl bg-[#E2E8F0]" />

            <div className="h-11 w-11 rounded-xl bg-[#E2E8F0]" />

          </div>

          <div className="mt-8">

            <div className="h-4 w-24 rounded bg-[#E2E8F0]" />

            <div className="mt-4 h-8 w-full rounded bg-[#E2E8F0]" />

            <div className="mt-3 h-8 w-2/3 rounded bg-[#E2E8F0]" />

          </div>

          <div className="mt-6 flex gap-3">

            <div className="h-9 w-24 rounded-full bg-[#E2E8F0]" />

            <div className="h-9 w-20 rounded-full bg-[#E2E8F0]" />

          </div>

          <div className="mt-8 h-px bg-[#E2E8F0]" />

          <div className="mt-6 flex justify-between">

            <div className="h-4 w-20 rounded bg-[#E2E8F0]" />

            <div className="h-4 w-24 rounded bg-[#E2E8F0]" />

          </div>

          <div className="mt-8 h-12 rounded-2xl bg-[#E2E8F0]" />

        </div>

      </div>

    ))
  : opportunities.map((item) => (

      <div
        key={item.title}
        className="group relative min-w-[320px] shrink-0 snap-center overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 lg:min-w-0"
      >

        {/* TOP */}

        <div className="flex items-start justify-between">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DBEAFE] text-lg font-semibold text-[#2563EB]">

            {item.org.charAt(0)}

          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8FAFC] transition-all duration-300 hover:bg-[#3B82F6] hover:text-white">

            <Bookmark className="h-5 w-5" />

          </button>

        </div>

        {/* CONTENT */}

        <div className="mt-8">

        <p className="text-sm font-medium text-[#475569]">
            {item.org}
          </p>

          <h3 className="mt-3 text-2xl font-semibold leading-tight text-black">

            {item.title}

          </h3>

        </div>

        {/* TAGS */}

        <div className="mt-6 flex flex-wrap gap-3">

          <div className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-2 text-sm text-[#2563EB]">
            {item.type}
          </div>

          <div className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-2 text-sm text-[#2563EB]">
            {item.tag}
          </div>

        </div>

        {/* INFO */}

        <div className="mt-8 flex items-center justify-between border-t border-[#E2E8F0] pt-6">

          <div className="flex items-center gap-2 text-sm text-[#475569]">

            <MapPin className="h-4 w-4" />

            {item.location}

          </div>

          <div className="flex items-center gap-2 text-sm text-[#475569]">

            <Clock3 className="h-4 w-4" />

            {item.deadline}

          </div>

        </div>

        {/* BUTTON */}

        <Link
          href="/explore"
          className="mt-8 flex items-center justify-between rounded-2xl bg-[#3B82F6] px-5 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2563EB]"
        >

          View Opportunity

          <ArrowUpRight className="h-4 w-4" />

        </Link>

      </div>

    ))
}

      </div>

    </section>
  )
}