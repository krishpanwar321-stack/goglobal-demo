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
      <main className="flex min-h-screen items-center justify-center bg-[#F8F5F0]">

        <p className="text-[#8B7355]">
          Loading student profile...
        </p>

      </main>
    )

  }

  return (
    <>
      <Sidebar />

      <main className="ml-24 min-h-screen bg-[#F8F5F0] text-[#2B1D16]">

        <section className="border-b border-[#E7DDD1] bg-[#FFFDF9] px-10 py-10">

          <p className="text-sm uppercase tracking-[0.25em] text-[#8B7355]">
            Candidate Profile
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">

            {student.fullName}

          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6B5B52]">

            {student.bio || "No bio added yet."}

          </p>

        </section>

        <section className="px-10 py-10">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm shadow-[#E7DDD1]/40">

              <h2 className="text-2xl font-bold text-[#2B1D16]">

                Education

              </h2>

              <div className="mt-6 space-y-5">

                <div>

                  <p className="text-sm text-[#8B7355]">
                    University
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#2B1D16]">

                    {student.university || "Not added"}

                  </h3>

                </div>

                <div>

                  <p className="text-sm text-[#8B7355]">
                    Degree
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#2B1D16]">

                    {student.degree || "Not added"}

                  </h3>

                </div>

                <div>

                  <p className="text-sm text-[#8B7355]">
                    Graduation Year
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#2B1D16]">

                    {student.graduationYear || "Not added"}

                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm shadow-[#E7DDD1]/40">

              <h2 className="text-2xl font-bold text-[#2B1D16]">

                Skills

              </h2>

              <p className="mt-6 leading-8 text-[#6B5B52]">

                {student.skills || "No skills added"}

              </p>

            </div>

            <div className="rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm shadow-[#E7DDD1]/40">

              <h2 className="text-2xl font-bold text-[#2B1D16]">

                Links

              </h2>

              <div className="mt-6 flex flex-col gap-4">

                {student.linkedin && (

                  <a
                    href={student.linkedin}
                    target="_blank"
                    className="text-[#2563EB] underline"
                  >

                    LinkedIn

                  </a>

                )}

                {student.portfolio && (

                  <a
                    href={student.portfolio}
                    target="_blank"
                    className="text-[#2563EB] underline"
                  >

                    Portfolio

                  </a>

                )}

                {student.resume && (

                  <a
                    href={student.resume}
                    target="_blank"
                    className="text-[#2563EB] underline"
                  >

                    Resume

                  </a>

                )}

              </div>

            </div>

            <div className="rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm shadow-[#E7DDD1]/40">

              <h2 className="text-2xl font-bold text-[#2B1D16]">

                Contact

              </h2>

              <p className="mt-6 text-lg text-[#6B5B52]">

                {student.email}

              </p>

            </div>

          </div>

        </section>

      </main>
    </>
  )

}