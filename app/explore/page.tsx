"use client"

import { useEffect, useState } from "react"
import OpportunityCard from "@/components/opportunity/OpportunityCard"
import Sidebar from "@/components/home/Sidebar"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { Search, Bell } from "lucide-react"
import { useRouter } from "next/navigation"

import { onAuthStateChanged } from "firebase/auth"

import {
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore"

import { auth, db } from "@/lib/firebase"


export default function ExplorePage() {
  const router = useRouter()

const [fullName, setFullName] = useState("")
const [opportunities, setOpportunities] =
  useState<any[]>([])

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
      useEffect(() => {

        const unsubscribe =
          onAuthStateChanged(auth, async (user) => {
      
            if (!user) {
      
              router.push("/login")
      
              return
      
            }
      
            const userDoc = await getDoc(
              doc(db, "users", user.uid)
            )
      
            const userData = userDoc.data()
      
            setFullName(userData?.fullName || "")
            const snapshot = await getDocs(
              collection(db, "opportunities")
            )
            
            const fetchedOpportunities =
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            
            setOpportunities(fetchedOpportunities)
      
          })
      
        return () => unsubscribe()
      
      }, [router])
  return (
    <main className="ml-24 min-h-screen bg-zinc-50 text-black">

<Sidebar />
<div className="absolute right-10 top-8 flex items-center gap-3">

  <button className="rounded-full border border-zinc-200 bg-white p-3">
    <Search className="h-4 w-4 text-zinc-700" />
  </button>

  <button className="rounded-full border border-zinc-200 bg-white p-3">
    <Bell className="h-4 w-4 text-zinc-700" />
  </button>

</div>

      {/* HEADER */}

      <section className="px-10 py-14">

        <p className="text-sm text-zinc-500">
          Explore Opportunities
        </p>

        <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight">
        Welcome back, {fullName || "Explorer"}.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
        Discover opportunities curated for your goals,
        interests and global ambitions.
        </p>
      </section>

      {/* SEARCH */}

      <section className="px-10 pb-10">

      <input
  type="text"
  placeholder="Search opportunities..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
          className="h-16 w-full rounded-3xl border border-zinc-200 bg-white px-6 text-[15px] shadow-sm outline-none transition focus:border-black focus:shadow-md"
        />

      </section>

      {/* MAIN LAYOUT */}

      <section className="px-10 pb-24">

        <div className="grid gap-10 grid-cols-1 lg:grid-cols-[260px_1fr]">

          {/* SIDEBAR */}

          <div className="sticky top-28 h-fit rounded-[32px] border border-zinc-200 bg-white p-7 shadow-sm">

            <h2 className="text-lg font-semibold">
              Filters
            </h2>

            {/* CATEGORY */}

            <div className="mt-8">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
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

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

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
