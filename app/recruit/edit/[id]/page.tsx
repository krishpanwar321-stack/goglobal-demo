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

  const [careerDomain, setCareerDomain] =
  useState("")

const [funding, setFunding] =
  useState("")

const [eligibility, setEligibility] =
  useState("")

const [responsibilities, setResponsibilities] =
  useState("")
  const [benefits, setBenefits] =
  useState("")
  const [applicationLink, setApplicationLink] =
  useState("")
  const [poster, setPoster] =
  useState<File | null>(null)

const [posterUrl, setPosterUrl] =
  useState("")

const [deadlineType, setDeadlineType] =
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

        setCareerDomain(
          data.careerDomain || ""
        )

setFunding(data.funding || "")

setEligibility(
  data.eligibility || ""
)

setResponsibilities(
  data.responsibilities || ""
)
setBenefits(data.benefits || "")
setApplicationLink(
  data.applicationLink || ""
)
setPosterUrl(
  data.posterUrl || ""
)
setDeadlineType(
  data.deadlineType || ""
)

      }

    }

    fetchOpportunity()

  }, [params.id])

  const handleUpdate = async (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    try {
      let finalPosterUrl =
  posterUrl

if (poster) {

  const formData =
    new FormData()

  formData.append(
    "file",
    poster
  )

  formData.append(
    "upload_preset",
    "goglobal-opportunities"
  )

  const response =
    await fetch(
      "https://api.cloudinary.com/v1_1/dch6dxstp/image/upload",
      {
        method: "POST",
        body: formData,
      }
    )

  const data =
    await response.json()

  finalPosterUrl =
    data.secure_url

}

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
          careerDomain,
          funding,
          eligibility,
          responsibilities,
          benefits,
          applicationLink,
posterUrl: finalPosterUrl,
deadlineType,
deadline,
        }
      )

      router.push("/recruit/dashboard")

    } catch (error) {

      console.error(error)

    }

  }

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#2B1D16]">

      <section className="mx-auto max-w-4xl px-6 py-16">

      <p className="text-sm text-[#8B7355]">
          Recruit Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#2B1D16]">
          Edit opportunity
        </h1>

        <form
          onSubmit={handleUpdate}
          className="mt-14 space-y-8 rounded-3xl border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm shadow-[#E7DDD1]/40"
        >

          <div>

            <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
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

            <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
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

            <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
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

  <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
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

  <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
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

  <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
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

    <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
      Region
    </label>

    <select
      value={location}
      onChange={(e) =>
        setLocation(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9]  px-5 outline-none focus:border-[#2563EB]"
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

    <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
      Opportunity Type
    </label>

    <select
      value={type}
      onChange={(e) =>
        setType(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9]  px-5 outline-none focus:border-[#2563EB]"
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

    <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
      Work Mode
    </label>

    <select
      value={mode}
      onChange={(e) =>
        setMode(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9]  px-5 outline-none focus:border-[#2563EB]"
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

    <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
    Career Domain
    </label>

    <select
      value={careerDomain}
      onChange={(e) =>
        setCareerDomain(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9]  px-5 outline-none focus:border-[#2563EB]"
    >

<option value="">
  Select career domain
</option>

<option value="Research">
  Research
</option>

<option value="Entrepreneurship">
  Entrepreneurship
</option>

<option value="Leadership">
  Leadership
</option>

<option value="Creative">
  Creative
</option>

<option value="Media">
  Media
</option>

<option value="Sports">
  Sports
</option>

<option value="Technology">
  Technology
</option>

<option value="Social Impact">
  Social Impact
</option>

    </select>

  </div>

  {/* FUNDING */}

  <div>

    <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
      Funding
    </label>

    <select
      value={funding}
      onChange={(e) =>
        setFunding(e.target.value)
      }
      className="h-14 w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9]  px-5 outline-none focus:border-[#2563EB]"
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
    Opportunity Poster
  </label>

  {posterUrl && (

    <img
      src={posterUrl}
      alt="Poster"
      className="mb-4 h-48 w-full rounded-2xl object-cover border border-[#E7DDD1]"
    />

  )}

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setPoster(
        e.target.files?.[0] || null
      )
    }
    className="w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9] px-5 py-4"
  />

</div>
<div>

  <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
    External Application Link
  </label>

  <Input
    placeholder="https://forms.google.com/..."
    value={applicationLink}
    onChange={(e) =>
      setApplicationLink(e.target.value)
    }
  />

</div>
          <div>

          <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
    Deadline Type
  </label>
            <div>



  <select
    value={deadlineType}
    onChange={(e) =>
      setDeadlineType(e.target.value)
    }
    className="h-14 w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9]  px-5 outline-none focus:border-[#2563EB]"
  >

    <option value="">
      Select deadline type
    </option>

    <option value="Today">
      Today
    </option>

    <option value="This Week">
      This Week
    </option>

    <option value="This Month">
      This Month
    </option>

    <option value="Rolling Basis">
      Rolling Basis
    </option>

  </select>

</div>
<label className="mb-3 mt-6 block text-sm font-medium">
  Deadline Date
</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) =>
                setDeadline(e.target.value)
              }
              className="w-full rounded-2xl border border-[#E7DDD1] bg-[#FFFDF9] px-5 py-4 outline-none transition focus:border-[#2563EB]"
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