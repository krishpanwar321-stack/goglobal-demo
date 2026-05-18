"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  useRouter,
} from "next/navigation"

import {
  onAuthStateChanged,
} from "firebase/auth"

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore"

import {
  auth,
  db,
} from "@/lib/firebase"

import Sidebar from "@/components/home/Sidebar"

import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"


export default function ProfilePage() {

  const router = useRouter()

  const [loading, setLoading] =
    useState(true)

  const [fullName, setFullName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [bio, setBio] =
    useState("")

  const [university, setUniversity] =
    useState("")

  const [degree, setDegree] =
    useState("")

  const [graduationYear, setGraduationYear] =
    useState("")

  const [skills, setSkills] =
    useState("")

  const [linkedin, setLinkedin] =
    useState("")

  const [portfolio, setPortfolio] =
    useState("")

  const [resume, setResume] =
    useState("")
    const [errors, setErrors] =
    useState<any>({})
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {

          if (!user) {

            router.push("/login")

            return

          }

          const userRef = doc(
            db,
            "users",
            user.uid
          )

          const userSnapshot =
            await getDoc(userRef)

          if (userSnapshot.exists()) {

            const userData =
              userSnapshot.data()

            setFullName(
              userData.fullName || ""
            )

            setEmail(
              userData.email || ""
            )

            setBio(
              userData.bio || ""
            )

            setUniversity(
              userData.university || ""
            )

            setDegree(
              userData.degree || ""
            )

            setGraduationYear(
              userData.graduationYear || ""
            )

            setSkills(
              userData.skills || ""
            )

            setLinkedin(
              userData.linkedin || ""
            )

            setPortfolio(
              userData.portfolio || ""
            )

            setResume(
              userData.resume || ""
            )

          }

          setLoading(false)

        }
      )

    return () => unsubscribe()

  }, [router])
  const validateForm = () => {

    const newErrors: any = {}
  
    const urlPattern =
      /^(https?:\/\/)[^\s$.?#].[^\s]*$/i
  
    if (
      linkedin &&
      !urlPattern.test(linkedin)
    ) {
  
      newErrors.linkedin =
        "Please enter a valid LinkedIn URL"
  
    }
  
    if (
      portfolio &&
      !urlPattern.test(portfolio)
    ) {
  
      newErrors.portfolio =
        "Please enter a valid portfolio URL"
  
    }
  
    if (
      resume &&
      !urlPattern.test(resume)
    ) {
  
      newErrors.resume =
        "Please enter a valid resume URL"
  
    }
  
    if (
      graduationYear &&
      !/^\d{4}$/.test(graduationYear)
    ) {
  
      newErrors.graduationYear =
        "Enter a valid 4-digit year"
  
    }
  
    setErrors(newErrors)
  
    return Object.keys(newErrors)
      .length === 0
  
  }
  const handleSaveProfile = async () => {

    if (!auth.currentUser) return
    if (!validateForm()) return

    try {

      await updateDoc(
        doc(
          db,
          "users",
          auth.currentUser.uid
        ),
        {
          fullName,
          bio,
          university,
          degree,
          graduationYear,
          skills,
          linkedin,
          portfolio,
          resume,
        }
      )

      alert("Profile updated successfully")

    } catch (error) {

      console.error(error)

    }

  }
  const profileFields = [
    fullName,
    bio,
    university,
    degree,
    graduationYear,
    skills,
    linkedin,
    portfolio,
    resume,
  ]
  
  const completedFields =
    profileFields.filter(
      (field) => field.trim() !== ""
    ).length
  
  const profileCompletion =
    Math.round(
      (completedFields /
        profileFields.length) * 100
    )

  if (loading) {

    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50">

        <p className="text-zinc-500">
          Loading profile...
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
            Student Profile
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">

            Build your global profile.

          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">

            Showcase your experience, skills and ambitions
            to recruiters and global organizations.

          </p>

        </section>

        <section className="px-10 py-10">
        <div className="mx-auto mb-8 max-w-5xl rounded-[32px] border border-zinc-200 bg-white p-8">

<div className="flex items-center justify-between">

  <div>

    <p className="text-sm text-zinc-500">
      Profile Strength
    </p>

    <h2 className="mt-2 text-3xl font-bold text-black">

      {profileCompletion}% Complete

    </h2>

  </div>

  <div
    className={`rounded-full px-4 py-2 text-sm font-medium ${
      profileCompletion >= 80
        ? "bg-green-100 text-green-700"
        : profileCompletion >= 50
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700"
    }`}
  >

    {profileCompletion >= 80
      ? "Recruiter Ready"
      : profileCompletion >= 50
      ? "Good Progress"
      : "Needs Improvement"}

  </div>

</div>

<div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-100">
    

  <div
    className="h-full rounded-full bg-black transition-all duration-500"
    style={{
      width: `${profileCompletion}%`,
    }}
  />

</div>

</div>
{profileCompletion < 100 && (
<div className="mx-auto mt-6 max-w-5xl">

  <div className="flex flex-wrap gap-3 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

  {!bio && (

    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-black hover:shadow-md">

      <span className="text-sm font-medium text-black">
        Add bio
      </span>

    </div>

  )}

  {!university && (

    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-black hover:shadow-md">

      <span className="text-sm font-medium text-black">
        Add university
      </span>

    </div>

  )}

  {!skills && (

    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-black hover:shadow-md">

      <span className="text-sm font-medium text-black">
        Add skills
      </span>

    </div>

  )}

  {!resume && (

    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-black hover:shadow-md">

      <span className="text-sm font-medium text-black">
        Add resume
      </span>

    </div>

  )}

  {!linkedin && (

    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-black hover:shadow-md">

      <span className="text-sm font-medium text-black">
        Add LinkedIn
      </span>

    </div>

  )}

</div>
</div>
)}
          <div className="mx-auto mt-8 max-w-5xl rounded-[32px] border border-zinc-200 bg-white p-10">

            <div className="grid gap-8 md:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Full Name
                </label>

                <Input
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                />

              </div>

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Email
                </label>

                <Input
                  value={email}
                  disabled
                />

              </div>

            </div>

            <div className="mt-8">

              <label className="mb-3 block text-sm font-medium">
                Bio
              </label>

              <Textarea
                rows={6}
                value={bio}
                onChange={(e) =>
                  setBio(e.target.value)
                }
              />

            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-medium">
                  University
                </label>

                <Input
                  value={university}
                  onChange={(e) =>
                    setUniversity(e.target.value)
                  }
                />

              </div>

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Degree
                </label>

                <Input
                  value={degree}
                  onChange={(e) =>
                    setDegree(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="mt-8">

              <label className="mb-3 block text-sm font-medium">
                Graduation Year
              </label>

              <Input
  type="number"
  min="2020"
  max="2100"
  placeholder="2028"
  value={graduationYear}
  onChange={(e) =>
    setGraduationYear(e.target.value)
  }
/>

{errors.graduationYear && (

  <p className="mt-2 text-sm text-red-500">

    {errors.graduationYear}

  </p>

)}

            </div>

            <div className="mt-8">

              <label className="mb-3 block text-sm font-medium">
                Skills
              </label>

              <Textarea
                rows={4}
                value={skills}
                onChange={(e) =>
                  setSkills(e.target.value)
                }
              />

            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-medium">
                  LinkedIn
                </label>

                <Input
  type="url"
  placeholder="https://linkedin.com/in/username"
  value={linkedin}
  onChange={(e) =>
    setLinkedin(e.target.value)
  }
/>

{errors.linkedin && (

  <p className="mt-2 text-sm text-red-500">

    {errors.linkedin}

  </p>

)}
              </div>

              <div>

                <label className="mb-3 block text-sm font-medium">
                  Portfolio
                </label>

                <Input
  type="url"
  placeholder="https://yourportfolio.com"
  value={portfolio}
  onChange={(e) =>
    setPortfolio(e.target.value)
  }
/>

{errors.portfolio && (

  <p className="mt-2 text-sm text-red-500">

    {errors.portfolio}

  </p>

)}

              </div>

            </div>

            <div className="mt-8">

              <label className="mb-3 block text-sm font-medium">
                Resume URL
              </label>

              <Input
  type="url"
  placeholder="https://drive.google.com/..."
  value={resume}
  onChange={(e) =>
    setResume(e.target.value)
  }
/>

{errors.resume && (

  <p className="mt-2 text-sm text-red-500">

    {errors.resume}

  </p>

)}

            </div>

            <button
  onClick={handleSaveProfile}
  className="mt-10 rounded-2xl bg-black px-6 py-4 font-medium text-white transition hover:opacity-90"
>

  Save Profile

</button>

          </div>

        </section>

      </main>
    </>
  )

}