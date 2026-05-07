"use client"

import { useState } from "react"
import OpportunityCard from "@/components/opportunity/OpportunityCard"

const opportunities = [
    {
      id: "google-internship",
      organization: "Google",
      title: "Software Engineering Internship",
      description:
        "Work with Google's engineering teams on impactful global projects.",
      type: "Internship",
      location: "USA",
      mode: "Remote",
      deadline: "May 28",
    },
  
    {
      id: "mitacs-fellowship",
      organization: "MITACS",
      title: "Global Research Fellowship",
      description:
        "Fully funded international research fellowship opportunity in Canada.",
      type: "Fellowship",
      location: "Canada",
      mode: "On-site",
      deadline: "June 10",
    },
  
    {
      id: "unicef-internship",
      organization: "UNICEF",
      title: "Global Innovation Internship",
      description:
        "Support innovation and research initiatives with UNICEF teams.",
      type: "Internship",
      location: "Remote",
      mode: "Remote",
      deadline: "June 18",
    },
  
    {
      id: "harvard-research-program",
      organization: "Harvard",
      title: "International Research Program",
      description:
        "Collaborate with global researchers on interdisciplinary projects.",
      type: "Research",
      location: "USA",
      mode: "On-site",
      deadline: "July 2",
    },
  ]

export default function ExplorePage() {
    const [search, setSearch] = useState("")

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  
    const [selectedModes, setSelectedModes] = useState<string[]>([])
    const filteredOpportunities = opportunities.filter((opportunity) => {

        const matchesSearch =
          opportunity.title.toLowerCase().includes(search.toLowerCase()) ||
          opportunity.organization.toLowerCase().includes(search.toLowerCase())
    
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(opportunity.type)
    
        const matchesMode =
          selectedModes.length === 0 ||
          selectedModes.includes(opportunity.mode)
    
        return matchesSearch && matchesCategory && matchesMode
      })
  return (
    <main className="min-h-screen bg-zinc-50 text-black">

      {/* NAVBAR */}

      {/* HEADER */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        <p className="text-sm text-zinc-500">
          Explore Opportunities
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight">
          Find your next global opportunity.
        </h1>

      </section>

      {/* SEARCH */}

      <section className="mx-auto max-w-7xl px-6 pb-10">

      <input
  type="text"
  placeholder="Search opportunities..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none focus:border-black"
        />

      </section>

      {/* MAIN LAYOUT */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-10 grid-cols-1 lg:grid-cols-[260px_1fr]">

          {/* SIDEBAR */}

          <div className="h-fit rounded-3xl border border-zinc-200 bg-white p-6">

            <h2 className="text-lg font-semibold">
              Filters
            </h2>

            {/* CATEGORY */}

            <div className="mt-8">

              <p className="mb-3 text-sm font-medium text-zinc-500">
                Category
              </p>

              <div className="space-y-3 text-sm">

                <label className="flex items-center gap-2">
                <input
  type="checkbox"
  checked={selectedCategories.includes("Internship")}
  onChange={() => {

    if (selectedCategories.includes("Internship")) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== "Internship")
      )
    } else {
      setSelectedCategories([
        ...selectedCategories,
        "Internship",
      ])
    }

  }}
/>
                  Internships
                </label>

                <label className="flex items-center gap-2">
                <input
  type="checkbox"
  checked={selectedCategories.includes("Fellowship")}
  onChange={() => {

    if (selectedCategories.includes("Fellowship")) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== "Fellowship")
      )
    } else {
      setSelectedCategories([
        ...selectedCategories,
        "Fellowship",
      ])
    }

  }}
/>
                  Fellowships
                </label>

                <label className="flex items-center gap-2">
                <input
  type="checkbox"
  checked={selectedCategories.includes("Research")}
  onChange={() => {

    if (selectedCategories.includes("Research")) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== "Research")
      )
    } else {
      setSelectedCategories([
        ...selectedCategories,
        "Research",
      ])
    }

  }}
/>
                  Research
                </label>

              </div>

            </div>

            {/* LOCATION */}

            <div className="mt-8">

              <p className="mb-3 text-sm font-medium text-zinc-500">
                Location Type
              </p>

              <div className="space-y-3 text-sm">

                <label className="flex items-center gap-2">
                <input
  type="checkbox"
  checked={selectedModes.includes("Remote")}
  onChange={() => {

    if (selectedModes.includes("Remote")) {
      setSelectedModes(
        selectedModes.filter((item) => item !== "Remote")
      )
    } else {
      setSelectedModes([
        ...selectedModes,
        "Remote",
      ])
    }

  }}
/>
                  Remote
                </label>

                <label className="flex items-center gap-2">
                <input
  type="checkbox"
  checked={selectedModes.includes("On-site")}
  onChange={() => {

    if (selectedModes.includes("On-site")) {
      setSelectedModes(
        selectedModes.filter((item) => item !== "On-site")
      )
    } else {
      setSelectedModes([
        ...selectedModes,
        "On-site",
      ])
    }

  }}
/>
                  On-site
                </label>

              </div>

            </div>

          </div>

          {/* CARDS */}

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

          {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
              id={opportunity.id}
                key={opportunity.title}
                organization={opportunity.organization}
                title={opportunity.title}
                description={opportunity.description}
                type={opportunity.type}
                location={opportunity.location}
                mode={opportunity.mode}
                deadline={opportunity.deadline}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  )
}
