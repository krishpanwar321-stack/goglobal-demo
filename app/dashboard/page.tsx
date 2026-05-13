"use client"
import {
    Compass,
    Bookmark,
    Clock3,
    Sparkles,
    ArrowRight,
  } from "lucide-react"
  import Sidebar from "@/components/home/Sidebar"
  import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { onAuthStateChanged } from "firebase/auth"

import {
  doc,
  getDoc,
} from "firebase/firestore"

import { auth, db } from "@/lib/firebase"
import { signOut } from "firebase/auth"
  
  export default function DashboardPage() {
    
    const router = useRouter()
    const handleLogout = async () => {

        await signOut(auth)
      
        router.push("/login")
      
      }
    const [fullName, setFullName] = useState("")
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
      
            setFullName(userData?.fullName || "")
      
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
                Dashboard
              </p>
  
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-black">
  
                Welcome back,
                <span className="text-zinc-400">
                  {" "}{fullName || "Explorer"}.
                </span>
  
              </h1>
  
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
  
                Discover curated global opportunities,
                track applications and explore programs
                tailored to your ambitions.
  
              </p>
  
            </div>
    
            <div className="flex items-center gap-4">

  <button
    onClick={handleLogout}
    className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-100"
  >

    Logout

  </button>

  <button className="rounded-2xl bg-black px-6 py-4 font-medium text-white">

    Explore Opportunities

  </button>

</div>
  
          </div>
          
  
        </section>
  
        {/* CONTENT */}
  
        <section className="px-10 py-10">

<div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">

  {/* LEFT */}

  <div className="rounded-[32px] border border-zinc-200 bg-white p-10">

    <p className="text-sm text-zinc-500">
      Personal Dashboard
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight text-black">

      Your global journey starts here.

    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">

      Explore opportunities, save programs,
      track applications and build your
      international career journey.

    </p>

    <button
      onClick={() => router.push("/explore")}
      className="mt-10 rounded-2xl bg-black px-6 py-4 font-medium text-white transition hover:opacity-90"
    >

      Explore Opportunities

    </button>

  </div>

  {/* RIGHT */}

  <div className="rounded-[32px] border border-zinc-200 bg-white p-8">

    <p className="text-sm text-zinc-500">
      Activity
    </p>

    <h2 className="mt-4 text-2xl font-bold text-black">

      No activity yet.

    </h2>

    <p className="mt-4 leading-8 text-zinc-600">

      Once you start saving opportunities,
      applying to programs and exploring
      global experiences, your activity
      will appear here.

    </p>

  </div>

</div>

</section>
              
  
      </main>
      </>
    )
  }