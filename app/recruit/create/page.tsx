"use client"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"

import { useState } from "react"
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore"

import {
  auth,
  db,
} from "@/lib/firebase"
import { useRouter } from "next/navigation"

export default function CreateOpportunityPage() {
    const router = useRouter()

    const [title, setTitle] = useState("")
    const [organization, setOrganization] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [type, setType] = useState("")
    const [mode, setMode] = useState("")
    const [deadline, setDeadline] = useState("")
    const handleSubmit = async (
      e: React.FormEvent
    ) => {
    
      e.preventDefault()
    
      try {
    
        await addDoc(
          collection(db, "opportunities"),
          {
            title,
            organization,
            description,
            location,
            type,
            deadline,
            mode,
    
            createdBy:
              auth.currentUser?.uid,
    
            createdAt:
              serverTimestamp(),
          }
        )
    
        router.push("/explore")
    
      } catch (error) {
    
        console.error(error)
    
      }
    
    }
  return (
    <main className="min-h-screen bg-zinc-50 text-black">



        <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:px-6 lg:py-16">

        <p className="text-sm text-zinc-500">
          Recruit Dashboard
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Create new opportunity
        </h1>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:gap-10 lg:grid-cols-[1fr_320px]">

  {/* LEFT */}

  <form
  onSubmit={handleSubmit}
  className="space-y-6 rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm sm:space-y-8 sm:p-8"
 >

    {/* TITLE */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Opportunity Title
      </label>

      <Input
  placeholder="Software Engineering Internship"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

    </div>

    {/* ORGANIZATION */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Organization
      </label>

      <Input
  placeholder="Google"
  value={organization}
  onChange={(e) => setOrganization(e.target.value)}
/>

    </div>

    {/* DESCRIPTION */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Description
      </label>

      <Textarea
  placeholder="Describe the opportunity..."
  rows={6}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>

    </div>
    {/* ELIGIBILITY */}

<div>

<label className="mb-3 block text-sm font-medium">
  Eligibility
</label>

<Textarea
  placeholder="Open to undergraduate students..."
  rows={4}
/>

</div>

{/* RESPONSIBILITIES */}

<div>

  <label className="mb-3 block text-sm font-medium">
    Responsibilities
  </label>

  <Textarea
  placeholder="Collaborate with teams..."
  rows={5}
/>

</div>
    {/* GRID */}

    <div className="grid gap-6 lg:grid-cols-3">

  <div>

    <label className="mb-3 block text-sm font-medium">
      Location
    </label>

    <Input
      placeholder="USA"
      value={location}
      onChange={(e) =>
        setLocation(e.target.value)
      }
    />

  </div>

  <div>

    <label className="mb-3 block text-sm font-medium">
      Opportunity Type
    </label>

    <Input
      placeholder="Internship"
      value={type}
      onChange={(e) =>
        setType(e.target.value)
      }
    />

  </div>

  <div>

    <label className="mb-3 block text-sm font-medium">
      Work Mode
    </label>

    <select
      value={mode}
      onChange={(e) =>
        setMode(e.target.value)
      }
        className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-3.5 outline-none transition focus:border-black sm:py-4"
    >

      <option value="">
        Select mode
      </option>

      <option value="Remote">
        Remote
      </option>

      <option value="Hybrid">
        Hybrid
      </option>

      <option value="Onsite">
        Onsite
      </option>

    </select>

  </div>

</div>

    {/* DEADLINE */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Application Deadline
      </label>

      <input
  type="date"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
  className="w-full rounded-2xl border border-zinc-300 px-5 py-3.5 outline-none transition focus:border-black sm:py-4"
/>

    </div>

    {/* BUTTON */}

    <Button type="submit">
  Publish Opportunity
</Button>

  </form>

  {/* RIGHT SIDEBAR */}

  <div className="h-fit rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">

    <p className="text-sm text-zinc-500">
      Publishing Guide
    </p>

    <div className="mt-8 space-y-8">

      <div>

        <h3 className="text-lg font-semibold">
          High-quality titles
        </h3>

        <p className="mt-2 leading-7 text-zinc-600">
          Keep titles clean, professional, and specific.
        </p>

      </div>

      <div>

        <h3 className="text-lg font-semibold">
          Clear descriptions
        </h3>

        <p className="mt-2 leading-7 text-zinc-600">
          Explain responsibilities, eligibility, and expectations clearly.
        </p>

      </div>

      <div>

        <h3 className="text-lg font-semibold">
          Better visibility
        </h3>

        <p className="mt-2 leading-7 text-zinc-600">
          Opportunities with complete information receive higher engagement.
        </p>

      </div>

    </div>

  </div>

</div>

      </section>

    </main>
  )
}
