"use client"
import Button from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"
import Sidebar from "@/components/home/Sidebar"

import {
  MapPin,
  CalendarDays,
  Globe,
  Bookmark,
  ArrowUpRight,
} from "lucide-react"

import { useEffect, useState } from "react"

import { useParams } from "next/navigation"

import {
  doc,
  getDoc,
} from "firebase/firestore"

import { db } from "@/lib/firebase"

export default function OpportunityPage() {

  const params = useParams()

  const [opportunity, setOpportunity] =
    useState<any>(null)
  
  useEffect(() => {
  
    const fetchOpportunity = async () => {
  
      const docRef = doc(
        db,
        "opportunities",
        params.id as string
      )
  
      const snapshot =
        await getDoc(docRef)
  
      if (snapshot.exists()) {
  
        setOpportunity({
          id: snapshot.id,
          ...snapshot.data(),
        })
  
      }
  
    }
  
    fetchOpportunity()
  
  }, [params.id])

  if (!opportunity) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50">

        <h1 className="text-3xl font-semibold">
          Opportunity not found
        </h1>

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-50 pl-24 text-black">

    <Sidebar />

      {/* HERO */}

      <section className="border-b border-zinc-200 bg-white">

      <div className="mx-auto max-w-7xl px-10 py-12">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            {opportunity.organization}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl xl:text-5xl font-bold leading-[1.02] tracking-tight">

            {opportunity.title}

          </h1>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-zinc-600">

            {opportunity.description}

          </p>

          {/* TAGS */}

          <div className="mt-8 flex flex-wrap gap-3">

            <Badge>
              {opportunity.type}
            </Badge>

            <Badge>
              {opportunity.location}
            </Badge>

            <Badge>
              {opportunity.mode}
            </Badge>

          </div>

          {/* META */}

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-500">

            <div className="flex items-center gap-2">

              <MapPin className="h-4 w-4" />

              {opportunity.location}

            </div>

            <div className="flex items-center gap-2">

              <Globe className="h-4 w-4" />

              {opportunity.mode}

            </div>

            <div className="flex items-center gap-2">

              <CalendarDays className="h-4 w-4" />

              Deadline: {opportunity.deadline}

            </div>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <section className="mx-auto max-w-7xl px-10 py-16">

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

          {/* LEFT */}

          <div className="space-y-14">

            {/* ABOUT */}

            <div className="rounded-[32px] border border-zinc-200 bg-white p-10">

              <h2 className="text-3xl font-semibold">
                About this opportunity
              </h2>

              <p className="mt-6 leading-8 text-zinc-700">

                {opportunity.description}

                {" "}This opportunity provides ambitious students the chance
                to collaborate globally, gain real-world experience and
                build meaningful professional networks across industries.

              </p>

            </div>

            {/* ELIGIBILITY */}

            <div className="rounded-[32px] border border-zinc-200 bg-white p-10">

              <h2 className="text-3xl font-semibold">
                Eligibility
              </h2>

              <ul className="mt-8 space-y-5 text-zinc-700">

                <li>
                  • Open to undergraduate and graduate students
                </li>

                <li>
                  • Strong academic background preferred
                </li>

                <li>
                  • Passion for innovation and collaboration
                </li>

                <li>
                  • Prior project or research experience is a plus
                </li>

              </ul>

            </div>

            {/* RESPONSIBILITIES */}

            <div className="rounded-[32px] border border-zinc-200 bg-white p-10">

              <h2 className="text-3xl font-semibold">
                Responsibilities
              </h2>

              <ul className="mt-8 space-y-5 text-zinc-700">

                <li>
                  • Collaborate with international teams
                </li>

                <li>
                  • Participate in projects and research initiatives
                </li>

                <li>
                  • Present ideas and outcomes professionally
                </li>

                <li>
                  • Contribute to innovation-driven programs
                </li>

              </ul>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}

          <div className="sticky top-28 h-fit rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm">

            {/* TOP */}

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  Opportunity Overview
                </p>

                <h2 className="mt-2 text-2xl font-semibold">

                  {opportunity.organization}

                </h2>

              </div>

              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 transition hover:bg-black hover:text-white">

                <Bookmark className="h-5 w-5" />

              </button>

            </div>

            {/* DETAILS */}

            <div className="mt-10 space-y-8">

              <div>

                <p className="text-sm text-zinc-500">
                  Opportunity Type
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {opportunity.type}
                </h3>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Location
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {opportunity.location}
                </h3>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Mode
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {opportunity.mode}
                </h3>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Deadline
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {opportunity.deadline}
                </h3>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="mt-12 space-y-4">

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90">

                Apply Now

                <ArrowUpRight className="h-4 w-4" />

              </button>

              <button className="w-full rounded-2xl border border-zinc-200 bg-white px-6 py-4 text-sm font-medium transition hover:bg-zinc-100">

                Save Opportunity

              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}