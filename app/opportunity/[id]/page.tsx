"use client"
import Button from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"
import Sidebar from "@/components/home/Sidebar"

import {
  MapPin,
  CalendarDays,
  Globe,
  Bookmark,
  ArrowUpRight,
} from "lucide-react"

import { useEffect, useState } from "react"

import { useParams } from "next/navigation"

import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore"

import { auth, db } from "@/lib/firebase"

export default function OpportunityPage() {

  const params = useParams()

  const [opportunity, setOpportunity] =
    useState<any>(null)
    const [saved, setSaved] =
  useState(false)
  const [applied, setApplied] =
  useState(false)
  const [applicationsCount, setApplicationsCount] =
  useState(0)
  
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
  
        setOpportunity({
          id: snapshot.id,
          ...snapshot.data(),
        })
        const savedRef = doc(
          db,
          "savedOpportunities",
          `${auth.currentUser?.uid}_${snapshot.id}`
        )
        
        const savedSnapshot =
          await getDoc(savedRef)
        
        setSaved(savedSnapshot.exists())
        const appliedRef = doc(
          db,
          "applications",
          `${auth.currentUser?.uid}_${snapshot.id}`
        )
        
        const appliedSnapshot =
          await getDoc(appliedRef)
        
        setApplied(appliedSnapshot.exists())
        const applicationsQuery = query(
          collection(db, "applications"),
          where(
            "opportunityId",
            "==",
            snapshot.id
          )
        )
        
        const applicationsSnapshot =
          await getDocs(applicationsQuery)
        
        setApplicationsCount(
          applicationsSnapshot.size
        )
  
      }
  
    }
  
    fetchOpportunity()
  
  }, [params.id])
  const handleSave = async () => {

    if (!auth.currentUser || !opportunity)
      return
  
    try {
  
      const saveRef = doc(
        db,
        "savedOpportunities",
        `${auth.currentUser.uid}_${opportunity.id}`
      )
  
      if (saved) {
  
        await deleteDoc(saveRef)
  
        setSaved(false)
  
      } else {
  
        await setDoc(saveRef, {
          userId: auth.currentUser.uid,
          opportunityId: opportunity.id,
          savedAt: new Date(),
        })
  
        setSaved(true)
  
      }
  
    } catch (error) {
  
      console.error(error)
  
    }
  
  }
  const handleApply = async () => {

    if (!auth.currentUser || !opportunity)
      return
  
    try {
  
      const applicationRef = doc(
        db,
        "applications",
        `${auth.currentUser.uid}_${opportunity.id}`
      )
  
      await setDoc(applicationRef, {
        userId: auth.currentUser.uid,
        opportunityId: opportunity.id,
        recruiterId:
          opportunity.createdBy,
  
        appliedAt:
          serverTimestamp(),
      })
  
      setApplied(true)
      setApplicationsCount(
        (prev) => prev + 1
      )
  
    } catch (error) {
  
      console.error(error)
  
    }
  
  }

  if (!opportunity) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50">

        <h1 className="text-2xl sm:text-3xl font-semibold">
          Opportunity not found
        </h1>

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-50 pb-24 text-black lg:pl-24 lg:pb-0">

    <Sidebar />

      {/* HERO */}

      <section className="border-b border-zinc-200 bg-white">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-12">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            {opportunity.organization}
          </p>

          <h1 className="mt-4 max-w-4xl text-2xl sm:text-3xl font-bold leading-[1.02] tracking-tight sm:text-4xl xl:text-5xl">

            {opportunity.title}

          </h1>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-zinc-600 sm:text-[18px]">

  {opportunity.description}

</p>

           

          {/* TAGS */}

          <div className="mt-8 flex flex-wrap gap-3">

            <Badge>
              {opportunity.type}
            </Badge>

            <Badge>
              {opportunity.location}
            </Badge>

            <Badge>
              {opportunity.mode}
            </Badge>
            <Badge>
  {opportunity.ecosystem}
</Badge>

<Badge>
  {opportunity.funding}
</Badge>

          </div>

          {/* META */}

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-500">

            <div className="flex items-center gap-2">

              <MapPin className="h-4 w-4" />

              {opportunity.location}

            </div>

            <div className="flex items-center gap-2">

              <Globe className="h-4 w-4" />

              {opportunity.mode}

            </div>

            <div className="flex items-center gap-2">

              <CalendarDays className="h-4 w-4" />

              Deadline: {opportunity.deadline}

            </div>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">

      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-10">

          {/* LEFT */}

          <div className="space-y-8">

            {/* ABOUT */}

            <div className="rounded-[32px] border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10">

              <h2 className="text-2xl sm:text-3xl font-semibold">
                About this opportunity
              </h2>

              <p className="mt-6 leading-8 text-zinc-700">

  {opportunity.description}

   </p>

            </div>

            {/* ELIGIBILITY */}

            <div className="rounded-[32px] border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10">

              <h2 className="text-2xl sm:text-3xl font-semibold">
                Eligibility
              </h2>

              <p className="mt-6 whitespace-pre-line leading-8 text-zinc-700">

  {opportunity.eligibility}

   </p>

            </div>

            {/* RESPONSIBILITIES */}

            <div className="rounded-[32px] border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10">

              <h2 className="text-2xl sm:text-3xl font-semibold">
                Responsibilities
              </h2>

              <p className="mt-6 whitespace-pre-line leading-8 text-zinc-700">

  {opportunity.responsibilities}

   </p>

            </div>

          

          <div className="rounded-[32px] border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10">

  <h2 className="text-2xl sm:text-3xl font-semibold">
    Benefits
  </h2>

  <p className="mt-6 whitespace-pre-line leading-8 text-zinc-700">

  {opportunity.benefits}

</p>



</div>
</div>
          {/* RIGHT SIDEBAR */}

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm lg:sticky lg:top-28 lg:h-fit lg:rounded-[32px] lg:p-8">

            {/* TOP */}

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  Opportunity Overview
                </p>

                <h2 className="mt-2 text-2xl font-semibold">

                  {opportunity.organization}

                </h2>

              </div>

              <button
  onClick={handleSave}
  className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition ${
    saved
      ? "border-black bg-black text-white"
      : "border-zinc-200 hover:bg-black hover:text-white"
  }`}
>

  <Bookmark className="h-5 w-5" />

</button>

            </div>

            {/* DETAILS */}

            <div className="mt-10 space-y-6">

            <div className="rounded-2xl bg-zinc-50 p-5">

<p className="text-sm text-zinc-500">
  Opportunity Type
</p>

<h3 className="mt-2 text-lg font-semibold">
  {opportunity.type}
</h3>

</div>

              <div>

                <p className="text-sm text-zinc-500">
                  Location
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {opportunity.location}
                </h3>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Mode
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {opportunity.mode}
                </h3>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Deadline
                </p>

                <h3 className="mt-2 text-lg font-semibold">
                  {opportunity.deadline}
                </h3>

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">

  <p className="text-sm text-zinc-500">
    Applications
  </p>

  <h3 className="mt-2 text-2xl font-bold">
  {applicationsCount}
  </h3>

  <p className="mt-1 text-sm text-zinc-500">
  {applicationsCount === 1
  ? "Student already applied"
  : "Students already applied"}
  </p>

</div>

            {/* BUTTONS */}

            <div className="mt-12 space-y-4">

            <button
  onClick={handleApply}
  disabled={applied}
  className={`flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 sm:px-6 sm:py-4 text-sm font-medium transition ${
    applied
      ? "bg-zinc-300 text-zinc-600"
      : "bg-black text-white hover:opacity-90"
  }`}
>

  {applied
    ? "Applied"
    : "Apply Now"}

  <ArrowUpRight className="h-4 w-4" />

</button>

              <button
  onClick={handleSave}

  className={`w-full rounded-2xl px-5 py-3.5 sm:px-6 sm:py-4 text-sm font-medium transition ${
    saved
      ? "bg-black text-white"
      : "border border-zinc-200 bg-white hover:bg-zinc-100"
  }`}
>

  {saved
    ? "Saved"
    : "Save Opportunity"}

</button>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}