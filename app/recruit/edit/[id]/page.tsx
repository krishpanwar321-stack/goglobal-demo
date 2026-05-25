"use client"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"

import {
  useEffect,
  useState,
} from "react"

import {
  useParams,
  useRouter,
} from "next/navigation"

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore"

import { db } from "@/lib/firebase"

export default function EditOpportunityPage() {

  const router = useRouter()

  const params = useParams()

  const [title, setTitle] = useState("")
  const [organization, setOrganization] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [type, setType] = useState("")
  const [deadline, setDeadline] = useState("")
  const [mode, setMode] = useState("")

const [ecosystem, setEcosystem] =
  useState("")

const [funding, setFunding] =
  useState("")

const [eligibility, setEligibility] =
  useState("")

const [responsibilities, setResponsibilities] =
  useState("")
  const [benefits, setBenefits] =
  useState("")

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

        const data = snapshot.data()

        setTitle(data.title || "")
        setOrganization(data.organization || "")
        setDescription(data.description || "")
        setLocation(data.location || "")
        setType(data.type || "")
        setDeadline(data.deadline || "")
        setMode(data.mode || "")

setEcosystem(
  data.ecosystem || ""
)

setFunding(data.funding || "")

setEligibility(
  data.eligibility || ""
)

setResponsibilities(
  data.responsibilities || ""
)
setBenefits(data.benefits || "")

      }

    }

    fetchOpportunity()

  }, [params.id])

  const handleUpdate = async (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    try {

      await updateDoc(
        doc(
          db,
          "opportunities",
          params.id as string
        ),
        {
          title,
          organization,
          description,
          location,
          type,
          mode,
          ecosystem,
          funding,
          eligibility,
          responsibilities,
          benefits,
          deadline,
        }
      )

      router.push("/recruit/dashboard")

    } catch (error) {

      console.error(error)

    }

  }

  return (
    <main className="min-h-screen bg-zinc-50 text-black">

      <section className="mx-auto max-w-4xl px-6 py-16">

        <p className="text-sm text-zinc-500">
          Recruit Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight">
          Edit opportunity
        </h1>

        <form
          onSubmit={handleUpdate}
          className="mt-14 space-y-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
        >

          <div>

            <label className="mb-3 block text-sm font-medium">
              Opportunity Title
            </label>

            <Input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

          </div>

          <div>

            <label className="mb-3 block text-sm font-medium">
              Organization
            </label>

            <Input
              value={organization}
              onChange={(e) =>
                setOrganization(e.target.value)
              }
            />

          </div>

          <div>

            <label className="mb-3 block text-sm font-medium">
              Description
            </label>

            <Textarea
              rows={8}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

          </div>
          <div>

  <label className="mb-3 block text-sm font-medium">
    Eligibility
  </label>

  <Textarea
    rows={5}
    value={eligibility}
    onChange={(e) =>
      setEligibility(e.target.value)
    }
  />

</div>

<div>

  <label className="mb-3 block text-sm font-medium">
    Responsibilities
  </label>

  <Textarea
    rows={5}
    value={responsibilities}
    onChange={(e) =>
      setResponsibilities(
        e.target.value
      )
    }
  />

</div>
<div>

  <label className="mb-3 block text-sm font-medium">
    Benefits
  </label>

  <Textarea
    rows={5}
    value={benefits}
    onChange={(e) =>
      setBenefits(e.target.value)
    }
  />

</div>

          <div className="grid gap-6 md:grid-cols-2">

  {/* REGION */}

  <div>

    <label className="mb-3 block text-sm font-medium">
      Region
    </label>

    <select
      value={location}
      onChange={(e) =>
        setLocation(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 outline-none focus:border-black"
    >

      <option value="">
        Select region
      </option>

      <option value="Global">
        Global
      </option>

      <option value="USA">
        USA
      </option>

      <option value="Europe">
        Europe
      </option>

      <option value="Asia">
        Asia
      </option>

      <option value="Middle East">
        Middle East
      </option>

      <option value="Africa">
        Africa
      </option>

      <option value="India">
        India
      </option>

    </select>

  </div>

  {/* TYPE */}

  <div>

    <label className="mb-3 block text-sm font-medium">
      Opportunity Type
    </label>

    <select
      value={type}
      onChange={(e) =>
        setType(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 outline-none focus:border-black"
    >

      <option value="">
        Select type
      </option>

      <option value="Global Opportunities">
        Global Opportunities
      </option>

      <option value="Regional Opportunities">
        Regional Opportunities
      </option>

      <option value="Internships">
        Internships
      </option>

      <option value="Freelancing">
        Freelancing
      </option>

      <option value="Meet Ups">
        Meet Ups
      </option>

      <option value="Conferences">
        Conferences
      </option>

      <option value="Startup Programs">
        Startup Programs
      </option>

      <option value="Hackathons">
        Hackathons
      </option>

      <option value="Sports">
        Sports
      </option>

      <option value="Mentorship">
        Mentorship
      </option>

      <option value="Fellowships">
        Fellowships
      </option>

      <option value="Scholarships">
        Scholarships
      </option>

      <option value="Cultural Events">
        Cultural Events
      </option>

    </select>

  </div>

  {/* MODE */}

  <div>

    <label className="mb-3 block text-sm font-medium">
      Work Mode
    </label>

    <select
      value={mode}
      onChange={(e) =>
        setMode(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 outline-none focus:border-black"
    >

      <option value="">
        Select mode
      </option>

      <option value="Remote">
        Remote
      </option>

      <option value="Onsite">
        Onsite
      </option>

      <option value="Hybrid">
        Hybrid
      </option>

    </select>

  </div>

  {/* ECOSYSTEM */}

  <div>

    <label className="mb-3 block text-sm font-medium">
      Ecosystem
    </label>

    <select
      value={ecosystem}
      onChange={(e) =>
        setEcosystem(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 outline-none focus:border-black"
    >

      <option value="">
        Select ecosystem
      </option>

      <option value="Research & Science">
        Research & Science
      </option>

      <option value="Technology & AI">
        Technology & AI
      </option>

      <option value="Business & Startups">
        Business & Startups
      </option>

      <option value="Creative & Media">
        Creative & Media
      </option>

      <option value="Leadership & Policy">
        Leadership & Policy
      </option>

      <option value="Social Impact">
        Social Impact
      </option>

      <option value="Sports & Fitness">
        Sports & Fitness
      </option>

    </select>

  </div>

  {/* FUNDING */}

  <div>

    <label className="mb-3 block text-sm font-medium">
      Funding
    </label>

    <select
      value={funding}
      onChange={(e) =>
        setFunding(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 outline-none focus:border-black"
    >

      <option value="">
        Select funding
      </option>

      <option value="Fully Funded">
        Fully Funded
      </option>

      <option value="Paid">
        Paid
      </option>

      <option value="Free">
        Free
      </option>

    </select>

  </div>

</div>

          <div>

            <label className="mb-3 block text-sm font-medium">
              Deadline
            </label>

            <input
              type="date"
              value={deadline}
              onChange={(e) =>
                setDeadline(e.target.value)
              }
              className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none transition focus:border-black"
            />

          </div>

          <Button type="submit">

            Save Changes

          </Button>

        </form>

      </section>

    </main>
  )

}