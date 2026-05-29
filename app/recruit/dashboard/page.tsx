"use client"
import {
    Briefcase,
    Users,
    BarChart3,
    Plus,
    ArrowRight,
  } from "lucide-react"
  import Sidebar from "@/components/home/Sidebar"
  import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { onAuthStateChanged } from "firebase/auth"

import {
    doc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    deleteDoc,
    updateDoc,
    writeBatch,
  } from "firebase/firestore"

import { auth, db } from "@/lib/firebase"
import { signOut } from "firebase/auth"

  export default function RecruiterDashboardPage() {
    const router = useRouter()
    const [opportunities, setOpportunities] =
  useState<any[]>([])
  const [applications, setApplications] =
  useState<any[]>([])
  const handleDelete = async (
    id: string
  ) => {
  
    try {
  
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this opportunity?"
      )
  
      if (!confirmDelete) return
  
      const batch = writeBatch(db)
  
      const opportunityRef = doc(
        db,
        "opportunities",
        id
      )
  
      batch.delete(opportunityRef)
  
      const applicationsQuery = query(
        collection(db, "applications"),
        where("opportunityId", "==", id)
      )
  
      const applicationsSnapshot =
        await getDocs(applicationsQuery)
  
      applicationsSnapshot.docs.forEach(
        (applicationDoc) => {
  
          batch.delete(applicationDoc.ref)
  
        }
      )
  
      const savedQuery = query(
        collection(db, "savedOpportunities"),
        where("opportunityId", "==", id)
      )
  
      const savedSnapshot =
        await getDocs(savedQuery)
  
      savedSnapshot.docs.forEach(
        (savedDoc) => {
  
          batch.delete(savedDoc.ref)
  
        }
      )
  
      await batch.commit()
  
      setOpportunities((prev) =>
        prev.filter((item) => item.id !== id)
      )
  
      setApplications((prev) =>
        prev.filter(
          (item) =>
            item.opportunityId !== id
        )
      )
  
    } catch (error) {
  
      console.error(error)
  
    }
  
  }
  const handleStatusUpdate = async (
    applicationId: string,
    status: string
  ) => {
  
    try {
  
      await updateDoc(
        doc(db, "applications", applicationId),
        {
          status,
        }
      )
  
      setApplications((prev) =>
        prev.map((item) =>
  
          item.id === applicationId
            ? { ...item, status }
            : item
  
        )
      )
  
    } catch (error) {
  
      console.error(error)
  
    }
  
  }
    const handleLogout = async () => {
        
        await signOut(auth)
      
        router.push("/login")
      
      }
    useEffect(() => {

        const unsubscribe =
          onAuthStateChanged(auth, async (user) => {
      
            if (!user) {
      
              router.push("/login")
      
              return
      
            }
      
            const userDoc = await getDoc(
              doc(db, "users", user.uid)
            )
      
            const userData = userDoc.data()
      
            if (userData?.role !== "recruiter") {
      
              router.push("/dashboard")
      
            }
            const q = query(
                collection(db, "opportunities"),
                where("createdBy", "==", user.uid)
              )
              
              const snapshot = await getDocs(q)
              
              const fetchedOpportunities =
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              
              setOpportunities(fetchedOpportunities)
              const applicationsQuery = query(
                collection(db, "applications"),
                where("recruiterId", "==", user.uid)
              )
              
              const applicationsSnapshot =
                await getDocs(applicationsQuery)
              
                const fetchedApplications =
                await Promise.all(
              
                  applicationsSnapshot.docs.map(
                    async (applicationDoc) => {
              
                      const applicationData =
                        applicationDoc.data()
              
                      const userRef = doc(
                        db,
                        "users",
                        applicationData.userId
                      )
                      const opportunityRef = doc(
                        db,
                        "opportunities",
                        applicationData.opportunityId
                      )
                      
                      const opportunitySnapshot =
                        await getDoc(opportunityRef)
                      
                      const opportunityData =
                        opportunitySnapshot.data()
              
                      const userSnapshot =
                        await getDoc(userRef)
              
                      const userData =
                        userSnapshot.data()
              
                      return {
                        opportunityTitle:
  opportunityData?.title || "Opportunity",

organization:
  opportunityData?.organization || "Organization",
                        id: applicationDoc.id,
              
                        ...applicationData,
                        studentId:
                        applicationData.userId,

                        applicantName:
                          userData?.fullName || "Unknown",
              
                        applicantEmail:
                          userData?.email || "No email",
              
                        status:
                          applicationData.status || "Applied",
                      }
              
                    }
                  )
              
                )
              
              setApplications(fetchedApplications)
              
              setApplications(fetchedApplications)
      
          })
      
        return () => unsubscribe()
      
      }, [router])
    return (
        
        <>
  
        <Sidebar />
      
        <main className="min-h-screen bg-zinc-50 pb-24 lg:ml-24 lg:pb-0">
  
        {/* TOP */}
  
        <section className="border-b border-zinc-200 bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
  
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
  
            <div>
  
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                Recruiter Dashboard
              </p>
  
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
  
                Manage your
                <span className="text-zinc-400">
                  {" "}opportunities.
                </span>
  
              </h1>
  
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
  
                Post opportunities, manage applicants and
                connect with ambitious talent globally.
  
              </p>
  
            </div>
  
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">

  <button
    onClick={handleLogout}
    className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-100"
  >

    Logout

  </button>

  <button
  onClick={() => router.push("/recruit/create")}
  className="rounded-2xl bg-black px-6 py-4 font-medium text-white"
  >

    Create Opportunity

  </button>

</div>
  
          </div>
  
        </section>
  
        {/* CONTENT */}
  
        <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
  
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
  
            {/* LEFT */}
  
            <div className="space-y-6">
  
              {/* ACTIVE LISTINGS */}
  
              <div className="rounded-[28px] border border-zinc-200 bg-white p-6 sm:p-8 lg:rounded-[32px]">
  
                <div className="flex items-center justify-between">
  
                  <div>
  
                    <h2 className="text-2xl font-bold text-black">
  
                      Active Listings
  
                    </h2>
  
                    <p className="mt-2 text-zinc-500">
  
                      Manage your posted opportunities
  
                    </p>
  
                  </div>
  
                  <Briefcase className="h-6 w-6 text-zinc-400" />
  
                </div>
  
                <div className="mt-8 space-y-4">
  
                {opportunities.map((item) => (

<div
  key={item.id}
  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:bg-white hover:shadow-sm"
>

<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

    <div>

      <h3 className="text-xl font-semibold text-black">

        {item.title}

      </h3>

      <p className="mt-2 text-zinc-500">

        {item.organization}

      </p>

    </div>

    <span className="rounded-full bg-black px-3 py-1 text-sm text-white">

      Active

    </span>

  </div>

  <div className="mt-6 flex flex-wrap gap-3">

  <button
    onClick={() =>
      router.push(`/opportunity/${item.id}`)
    }
    className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-100"
  >

    View

  </button>

  <button
    onClick={() =>
      router.push(`/recruit/edit/${item.id}`)
    }
    className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-100"
  >

    Edit

  </button>

  <button
    onClick={() =>
      handleDelete(String(item.id))
    }
    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
  >

    Delete

  </button>

</div>

</div>

))}
  
                </div>
  
              </div>
  
            </div>
  
            {/* RIGHT */}
  
            <div className="space-y-6">

            <div className="rounded-[32px] border border-zinc-200 bg-white p-8">

  <p className="text-sm text-zinc-500">
    Applications
  </p>

  <h2 className="mt-4 text-3xl font-bold text-black sm:text-4xl">

    {applications.length}

  </h2>

  <p className="mt-2 text-zinc-600">

    Total applications received

  </p>

  {applications.length === 0 ? (

    <p className="mt-8 leading-8 text-zinc-500">

      Applications from students will appear here
      once users start applying to your opportunities.

    </p>

  ) : (

    <div className="mt-8 space-y-4">

      {applications.slice(0, 5).map((item) => (

        <div
          key={item.id}
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
        >

<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

<div>

<button
  onClick={() =>
    router.push(
      `/student/${item.studentId}`
    )
  }
  className="text-left text-lg font-semibold text-black transition hover:underline"
>

  {item.applicantName}

</button>

  <p className="mt-1 text-sm text-zinc-500">

    {item.applicantEmail}

  </p>
  <p className="mt-3 text-sm font-medium text-black">

  Applied for:
  <span className="text-zinc-500">

    {" "}
    {item.opportunityTitle}

  </span>

</p>

<p className="mt-1 text-sm text-zinc-500">

  {item.organization}

</p>

</div>

<span
  className={`rounded-full px-3 py-1 text-xs font-medium text-white ${
    item.status === "Accepted"
      ? "bg-green-500"
      : item.status === "Rejected"
      ? "bg-red-500"
      : item.status === "Under Review"
      ? "bg-yellow-500"
      : "bg-black"
  }`}
>

  {item.status}

</span>

</div>
<p className="mt-4 text-sm text-zinc-500">

  Applied recently

</p>
<div className="mt-5 flex flex-wrap gap-2">

<button
  onClick={() => {

    handleStatusUpdate(
      item.id,
      "Under Review"
    )

    router.push(
      `/student/${item.studentId}`
    )

  }}
  className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-black hover:bg-zinc-100"
>

  Review

</button>

  <button
    onClick={() =>
      handleStatusUpdate(
        item.id,
        "Accepted"
      )
    }
    className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-green-600" 
  >

    Accept

  </button>

  <button
    onClick={() =>
      handleStatusUpdate(
        item.id,
        "Rejected"
      )
    }
    className="rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-red-600"
  >

    Reject

  </button>

</div>

          

        </div>

      ))}

    </div>

  )}

</div>

            </div>
  
          </div>
  
        </section>
  
      </main>
      </>
    )
  }