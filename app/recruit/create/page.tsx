"use client"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateOpportunityPage() {
    const router = useRouter()

    const [title, setTitle] = useState("")
    const [organization, setOrganization] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [type, setType] = useState("")
    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()
    
        const newOpportunity = {
          id: title.toLowerCase().replace(/\s+/g, "-"),
          title,
          organization,
          description,
          location,
          type,
          mode: "Remote",
          deadline: "New Opportunity",
        }
    
        const existing =
          JSON.parse(localStorage.getItem("opportunities") || "[]")
    
        localStorage.setItem(
          "opportunities",
          JSON.stringify([newOpportunity, ...existing])
        )
    
        router.push("/explore")
      }
  return (
    <main className="min-h-screen bg-zinc-50 text-black">



      <section className="mx-auto max-w-4xl px-6 py-16">

        <p className="text-sm text-zinc-500">
          Recruit Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight">
          Create new opportunity
        </h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">

  {/* LEFT */}

  <form
  onSubmit={handleSubmit}
  className="space-y-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
 >

    {/* TITLE */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Opportunity Title
      </label>

      <Input placeholder="Software Engineering Internship" />

    </div>

    {/* ORGANIZATION */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Organization
      </label>

      <Input placeholder="Google" />

    </div>

    {/* DESCRIPTION */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Description
      </label>

      <Textarea
  placeholder="Describe the opportunity..."
  rows={8}
  />

    </div>
    {/* ELIGIBILITY */}

<div>

<label className="mb-3 block text-sm font-medium">
  Eligibility
</label>

<Textarea
  placeholder="Open to undergraduate students..."
  rows={5}
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

    <div className="grid gap-6 md:grid-cols-2">

      <div>

        <label className="mb-3 block text-sm font-medium">
          Location
        </label>

        <Input placeholder="USA" />

      </div>

      <div>

        <label className="mb-3 block text-sm font-medium">
          Opportunity Type
        </label>

        <Input placeholder="Internship" />

      </div>

    </div>

    {/* DEADLINE */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Application Deadline
      </label>

      <input
        type="date"
        className="w-full rounded-2xl border border-zinc-300 px-5 py-4 outline-none transition focus:border-black"
      />

    </div>

    {/* BUTTON */}

    <Button type="submit">
  Publish Opportunity
</Button>

  </form>

  {/* RIGHT SIDEBAR */}

  <div className="h-fit rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">

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
