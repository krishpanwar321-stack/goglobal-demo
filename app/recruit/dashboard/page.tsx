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
  } from "firebase/firestore"

import { auth, db } from "@/lib/firebase"
import { signOut } from "firebase/auth"

  export default function RecruiterDashboardPage() {
    const router = useRouter()
    const [opportunities, setOpportunities] =
  useState<any[]>([])
  const handleDelete = async (
    id: string
  ) => {
  
    try {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this opportunity?"
          )
          
          if (!confirmDelete) return
      await deleteDoc(
        doc(db, "opportunities", id)
      )
  
      setOpportunities((prev) =>
        prev.filter((item) => item.id !== id)
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

      
          })
      
        return () => unsubscribe()
      
      }, [router])
    return (
        
        <>
  
        <Sidebar />
      
        <main className="ml-24 min-h-screen bg-zinc-50">
  
        {/* TOP */}
  
        <section className="border-b border-zinc-200 bg-white px-10 py-10">
  
          <div className="flex items-center justify-between">
  
            <div>
  
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                Recruiter Dashboard
              </p>
  
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-black">
  
                Manage your
                <span className="text-zinc-400">
                  {" "}opportunities.
                </span>
  
              </h1>
  
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
  
                Post opportunities, manage applicants and
                connect with ambitious talent globally.
  
              </p>
  
            </div>
  
            <div className="flex items-center gap-4">

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
  
        <section className="px-10 py-10">
  
          <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
  
            {/* LEFT */}
  
            <div className="space-y-6">
  
              {/* ACTIVE LISTINGS */}
  
              <div className="rounded-[32px] border border-zinc-200 bg-white p-8">
  
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

  <div className="flex items-start justify-between">

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

  <div className="mt-6 flex items-center gap-3">

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
  Recruiter Workspace
</p>

<h2 className="mt-4 text-3xl font-bold text-black">

  Your opportunities are now live.

</h2>

<p className="mt-4 leading-8 text-zinc-600">

  Create, manage and update opportunities
  visible to students across the platform.

</p>

<button
  onClick={() => router.push("/recruit/create")}
  className="mt-8 rounded-2xl bg-black px-6 py-4 font-medium text-white transition hover:opacity-90"
>

  Create Opportunity

</button>

</div>

            </div>
  
          </div>
  
        </section>
  
      </main>
      </>
    )
  }