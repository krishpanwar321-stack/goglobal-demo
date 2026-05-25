"use client"
import { useSearchParams } from "next/navigation"
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
  const searchParams = useSearchParams()

const typeFromUrl =
  searchParams.get("type")
  const feedFromUrl =
  searchParams.get("feed")

const [fullName, setFullName] = useState("")
const [userCountry, setUserCountry] =
  useState("")
const [opportunities, setOpportunities] =
  useState<any[]>([])

    const [search, setSearch] = useState("")

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  
    const [selectedModes, setSelectedModes] = useState<string[]>([])
    const [selectedRegions, setSelectedRegions] =
  useState<string[]>([])

const [selectedFunding, setSelectedFunding] =
  useState<string[]>([])

const [selectedEcosystems, setSelectedEcosystems] =
  useState<string[]>([])
  const [selectedDeadlines, setSelectedDeadlines] =
  useState<string[]>([])
  const [sortBy, setSortBy] =
  useState("Most Recent")
    const filteredOpportunities = opportunities.filter((opportunity) => {

      const matchesSearch =
      opportunity.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
    
      opportunity.organization
        ?.toLowerCase()
        .includes(search.toLowerCase())
    
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(opportunity.type)
    
          const matchesMode =
          selectedModes.length === 0 ||
          selectedModes.includes(opportunity.mode)
        
        const matchesRegion =
          selectedRegions.length === 0 ||
          selectedRegions.includes(opportunity.location)
        
          const matchesFunding =
          selectedFunding.length === 0 ||
          selectedFunding.includes(
            opportunity.funding || ""
          )
        
          const matchesCareerDomain =
  selectedEcosystems.length === 0 ||
  selectedEcosystems.includes(
    opportunity.careerDomain || ""
  )

          const matchesDeadline =
  selectedDeadlines.length === 0 ||
  selectedDeadlines.includes(
    opportunity.deadlineType || ""
  )
  const matchesFeed =
  !feedFromUrl ||

  (
    feedFromUrl === "regional" &&
    opportunity.location === userCountry
  ) ||

  (
    feedFromUrl === "global" &&
    opportunity.location !== userCountry
  )
  return (
    matchesSearch &&
    matchesCategory &&
    matchesFeed &&
    matchesMode &&
          matchesMode &&
          matchesRegion &&
          matchesFunding &&
          matchesDeadline &&
          matchesCareerDomain
        )
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
            setUserCountry(
              userData?.country || ""
            )
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
      useEffect(() => {

        if (typeFromUrl) {
      
          setSelectedCategories([
            typeFromUrl
          ])
      
        }
      
      }, [typeFromUrl])
  return (
    <main className="min-h-screen bg-zinc-50 pb-24 text-black lg:ml-24 lg:pb-0">

<Sidebar />
<div className="absolute right-5 top-5 flex items-center gap-2 sm:right-8 sm:top-8 sm:gap-3">

  <button className="rounded-full border border-zinc-200 bg-white p-3">
    <Search className="h-4 w-4 text-zinc-700" />
  </button>

  <button className="rounded-full border border-zinc-200 bg-white p-3">
    <Bell className="h-4 w-4 text-zinc-700" />
  </button>

</div>

      {/* HEADER */}

      <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

        <p className="text-sm text-zinc-500">
          Explore Opportunities
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
        Welcome back, {fullName || "Explorer"}.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
        Discover opportunities curated for your goals,
        interests and global ambitions.
        </p>
      </section>

      {/* SEARCH */}

      <section className="px-5 pb-8 sm:px-8 lg:px-10 lg:pb-10">

      <input
  type="text"
  placeholder="Search opportunities..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
          className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-[15px] shadow-sm outline-none transition focus:border-black focus:shadow-md sm:h-16 sm:rounded-3xl sm:px-6"
        />

      </section>
      <section className="px-5 pb-6 sm:px-8 lg:px-10">

 

</section>

      {/* MAIN LAYOUT */}

      <section className="px-5 pb-24 sm:px-8 lg:px-10">

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
    
          {/* SIDEBAR */}

          <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm lg:sticky lg:top-28 lg:h-fit lg:rounded-[32px] lg:p-7">

            <h2 className="text-lg font-semibold">
              Filters
            </h2>

            {/* CATEGORY */}

            <div className="mt-8">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Category
              </p>

              <div className="space-y-3 text-sm">

  {[
    "Internships",
    "Freelancing",
    "Meet Ups",
    "Conferences",
    "Startup Programs",
    "Hackathons",
    "Sports",
    "Mentorship",
    "Fellowships",
    "Scholarships",
    "Cultural Events",
  ].map((category) => (

    <label
      key={category}
      className="flex items-center gap-2"
    >

      <input
        type="checkbox"
        checked={selectedCategories.includes(category)}
        onChange={() => {

          if (
            selectedCategories.includes(category)
          ) {

            setSelectedCategories(
              selectedCategories.filter(
                (item) => item !== category
              )
            )

          } else {

            setSelectedCategories([
              ...selectedCategories,
              category,
            ])

          }

        }}
      />

      {category}

    </label>

  ))}

</div>

            </div>
            <div className="my-7 border-t border-zinc-100" />
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
  checked={selectedModes.includes("Onsite")}
  onChange={() => {

    if (selectedModes.includes("Onsite")) {

      setSelectedModes(
        selectedModes.filter(
          (item) => item !== "Onsite"
        )
      )

    } else {

      setSelectedModes([
        ...selectedModes,
        "Onsite",
      ])

    }

  }}
/>

Onsite

</label>

<label className="flex items-center gap-2">

<input
  type="checkbox"
  checked={selectedModes.includes("Hybrid")}
  onChange={() => {

    if (selectedModes.includes("Hybrid")) {

      setSelectedModes(
        selectedModes.filter(
          (item) => item !== "Hybrid"
        )
      )

    } else {

      setSelectedModes([
        ...selectedModes,
        "Hybrid",
      ])

    }

  }}
/>

Hybrid

</label>

              </div>

            </div>

          
         
  <div className="my-7 border-t border-zinc-100" />

<div>

  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">

    Region

  </p>

  <div className="space-y-3 text-sm">

    {[
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "Japan",
  "South Korea",
  "United Arab Emirates",
  ].map((region) => (

      <label
        key={region}
        className="flex items-center gap-2"
      >

        <input
          type="checkbox"
          checked={selectedRegions.includes(region)}
          onChange={() => {

            if (selectedRegions.includes(region)) {

              setSelectedRegions(
                selectedRegions.filter(
                  (item) => item !== region
                )
              )

            } else {

              setSelectedRegions([
                ...selectedRegions,
                region,
              ])

            }

          }}
        />

        {region}

      </label>

    ))}

  </div>

</div>

<div className="my-7 border-t border-zinc-100" />

<div>

  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">

    Funding

  </p>

  <div className="space-y-3 text-sm">

    {[
      "Fully Funded",
      "Paid",
      "Free",
    ].map((funding) => (

      <label
        key={funding}
        className="flex items-center gap-2"
      >

        <input
          type="checkbox"
          checked={selectedFunding.includes(funding)}
          onChange={() => {

            if (selectedFunding.includes(funding)) {

              setSelectedFunding(
                selectedFunding.filter(
                  (item) => item !== funding
                )
              )

            } else {

              setSelectedFunding([
                ...selectedFunding,
                funding,
              ])

            }

          }}
        />

        {funding}

      </label>

    ))}

  </div>

</div>
<div className="my-7 border-t border-zinc-100" />

<div>

  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
    Deadline
  </p>

  <div className="space-y-3 text-sm">

    {[
      "Closing Soon",
      "This Week",
      "This Month",
      "Open",
    ].map((deadline) => (

      <label
        key={deadline}
        className="flex items-center gap-2"
      >

        <input
          type="checkbox"
          checked={selectedDeadlines.includes(deadline)}
          onChange={() => {

            if (
              selectedDeadlines.includes(deadline)
            ) {

              setSelectedDeadlines(
                selectedDeadlines.filter(
                  (item) => item !== deadline
                )
              )

            } else {

              setSelectedDeadlines([
                ...selectedDeadlines,
                deadline,
              ])

            }

          }}
        />

        {deadline}

      </label>

    ))}

  </div>

</div>

<div className="my-7 border-t border-zinc-100" />

<div>

  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">

  Career Domains

  </p>

  <div className="space-y-3 text-sm">

    {[
  "AI & Technology",
  "Business & Startups",
  "Research & Science",
  "Leadership & Policy",
  "Media & Content",
  "Design & Creativity",
  "Social Impact",
  "Sports & Fitness",
  "Finance & Consulting",
  "Environment & Sustainability",
  ].map((ecosystem) => (

      <label
        key={ecosystem}
        className="flex items-center gap-2"
      >

        <input
          type="checkbox"
          checked={selectedEcosystems.includes(ecosystem)}
          onChange={() => {

            if (
              selectedEcosystems.includes(ecosystem)
            ) {

              setSelectedEcosystems(
                selectedEcosystems.filter(
                  (item) =>
                    item !== ecosystem
                )
              )

            } else {

              setSelectedEcosystems([
                ...selectedEcosystems,
                ecosystem,
              ])

            }

          }}
        />

        {ecosystem}

      </label>

    ))}

  </div>


  </div>
<div className="mt-10">

  <button
    onClick={() => {

      setSelectedCategories([])
      setSelectedModes([])
      setSelectedRegions([])
      setSelectedFunding([])
      setSelectedEcosystems([])
      setSelectedDeadlines([])

    }}
    className="w-full rounded-2xl border border-zinc-200 py-3 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
  >

    Reset Filters

  </button>
  </div>
</div>

          {/* CARDS */}

          <div className="grid auto-rows-max grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">

          {filteredOpportunities.length === 0 ? (

<div className="col-span-full rounded-[32px] border border-dashed border-zinc-300 bg-white p-12 text-center">

  <h3 className="text-2xl font-semibold text-black">
    No opportunities found
  </h3>

  <p className="mt-3 text-zinc-500">
    Try changing your filters or search.
  </p>

</div>

) : (

filteredOpportunities.map((opportunity) => (
              <OpportunityCard
              id={opportunity.id}
              key={opportunity.id}
                organization={opportunity.organization}
                title={opportunity.title}
                description={opportunity.description}
                type={opportunity.type}
                location={opportunity.location}
                mode={opportunity.mode}
                deadline={opportunity.deadline}
              />
            ))
          )}

          </div>

   </div>

      </section>

    </main>
  )
}
