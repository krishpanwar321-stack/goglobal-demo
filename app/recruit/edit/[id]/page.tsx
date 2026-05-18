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

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-3 block text-sm font-medium">
                Location
              </label>

              <Input
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
                value={type}
                onChange={(e) =>
                  setType(e.target.value)
                }
              />

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