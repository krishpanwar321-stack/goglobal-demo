"use client"

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
} from "firebase/firestore"

import {
  db,
} from "@/lib/firebase"

import Sidebar from "@/components/home/Sidebar"

export default function StudentProfilePage() {

  const params = useParams()

  const router = useRouter()

  const [loading, setLoading] =
    useState(true)

  const [student, setStudent] =
    useState<any>(null)

  useEffect(() => {

    const fetchStudent = async () => {

      try {

        const studentRef = doc(
          db,
          "users",
          String(params.id)
        )

        const studentSnapshot =
          await getDoc(studentRef)

        if (!studentSnapshot.exists()) {

          router.push("/recruit/dashboard")

          return

        }

        setStudent(studentSnapshot.data())

        setLoading(false)

      } catch (error) {

        console.error(error)

      }

    }

    fetchStudent()

  }, [params.id, router])

  if (loading) {

    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50">

        <p className="text-zinc-500">
          Loading student profile...
        </p>

      </main>
    )

  }

  return (
    <>
      <Sidebar />

      <main className="ml-24 min-h-screen bg-zinc-50 text-black">

        <section className="border-b border-zinc-200 bg-white px-10 py-10">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Candidate Profile
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">

            {student.fullName}

          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">

            {student.bio || "No bio added yet."}

          </p>

        </section>

        <section className="px-10 py-10">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-[32px] border border-zinc-200 bg-white p-8">

              <h2 className="text-2xl font-bold text-black">

                Education

              </h2>

              <div className="mt-6 space-y-5">

                <div>

                  <p className="text-sm text-zinc-500">
                    University
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-black">

                    {student.university || "Not added"}

                  </h3>

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Degree
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-black">

                    {student.degree || "Not added"}

                  </h3>

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Graduation Year
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-black">

                    {student.graduationYear || "Not added"}

                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-zinc-200 bg-white p-8">

              <h2 className="text-2xl font-bold text-black">

                Skills

              </h2>

              <p className="mt-6 leading-8 text-zinc-600">

                {student.skills || "No skills added"}

              </p>

            </div>

            <div className="rounded-[32px] border border-zinc-200 bg-white p-8">

              <h2 className="text-2xl font-bold text-black">

                Links

              </h2>

              <div className="mt-6 flex flex-col gap-4">

                {student.linkedin && (

                  <a
                    href={student.linkedin}
                    target="_blank"
                    className="text-black underline"
                  >

                    LinkedIn

                  </a>

                )}

                {student.portfolio && (

                  <a
                    href={student.portfolio}
                    target="_blank"
                    className="text-black underline"
                  >

                    Portfolio

                  </a>

                )}

                {student.resume && (

                  <a
                    href={student.resume}
                    target="_blank"
                    className="text-black underline"
                  >

                    Resume

                  </a>

                )}

              </div>

            </div>

            <div className="rounded-[32px] border border-zinc-200 bg-white p-8">

              <h2 className="text-2xl font-bold text-black">

                Contact

              </h2>

              <p className="mt-6 text-lg text-zinc-600">

                {student.email}

              </p>

            </div>

          </div>

        </section>

      </main>
    </>
  )

}