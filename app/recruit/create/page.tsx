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
    const [funding, setFunding] = useState("")

    const [careerDomain, setCareerDomain] =
    useState("")

const [deadlineType, setDeadlineType] =
  useState("")
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

funding,
careerDomain,
deadlineType,
    
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

<select
  value={location}
  onChange={(e) =>
    setLocation(e.target.value)
  }
  className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 text-base outline-none transition focus:border-black"
>

  <option value="">
    Select location
  </option>

<option value="Afghanistan">Afghanistan</option>
<option value="Argentina">Argentina</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Belgium">Belgium</option>
<option value="Brazil">Brazil</option>
<option value="Canada">Canada</option>
<option value="China">China</option>
<option value="Denmark">Denmark</option>
<option value="Egypt">Egypt</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Germany">Germany</option>
<option value="Greece">Greece</option>
<option value="Hong Kong">Hong Kong</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Japan">Japan</option>
<option value="Kenya">Kenya</option>
<option value="Malaysia">Malaysia</option>
<option value="Mexico">Mexico</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Nigeria">Nigeria</option>
<option value="Norway">Norway</option>
<option value="Pakistan">Pakistan</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Russia">Russia</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Singapore">Singapore</option>
<option value="South Africa">South Africa</option>
<option value="South Korea">South Korea</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Taiwan">Taiwan</option>
<option value="Thailand">Thailand</option>
<option value="Turkey">Turkey</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="Vietnam">Vietnam</option>

</select>

</div>

<div>

<label className="mb-3 block text-sm font-medium">
  Opportunity Type
</label>

<select
  value={type}
  onChange={(e) =>
    setType(e.target.value)
  }
  className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 text-base outline-none transition focus:border-black"
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

<div className="grid gap-6 lg:grid-cols-3">

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
      className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-3.5 outline-none transition focus:border-black sm:py-4"
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

  {/* ECOSYSTEM */}

  <div>

    <label className="mb-3 block text-sm font-medium">
    Career Domain
    </label>

    <select
      value={careerDomain}
      onChange={(e) =>
        setCareerDomain(e.target.value)
      }
      className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-3.5 outline-none transition focus:border-black sm:py-4"
    >

<option value="">
  Select domain
</option>

<option value="AI & Technology">
  AI & Technology
</option>

<option value="Business & Startups">
  Business & Startups
</option>

<option value="Research & Science">
  Research & Science
</option>

<option value="Leadership & Policy">
  Leadership & Policy
</option>

<option value="Media & Content">
  Media & Content
</option>

<option value="Design & Creativity">
  Design & Creativity
</option>

<option value="Social Impact">
  Social Impact
</option>

<option value="Sports & Fitness">
  Sports & Fitness
</option>

<option value="Finance & Consulting">
  Finance & Consulting
</option>

<option value="Environment & Sustainability">
  Environment & Sustainability
</option>

    </select>

  </div>

  {/* DEADLINE TYPE */}

  <div>

    <label className="mb-3 block text-sm font-medium">
      Deadline Type
    </label>

    <select
      value={deadlineType}
      onChange={(e) =>
        setDeadlineType(e.target.value)
      }
      className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-3.5 outline-none transition focus:border-black sm:py-4"
    >

      <option value="">
        Select type
      </option>

      <option value="Closing Soon">
        Closing Soon
      </option>

      <option value="This Week">
        This Week
      </option>

      <option value="This Month">
        This Month
      </option>

      <option value="Open">
        Open
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
