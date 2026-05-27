"use client"

import Link from "next/link"

import {
  House,
  Search,
  Bookmark,
  Briefcase,
  Calendar,
  Users,
} from "lucide-react"

import { useRouter } from "next/navigation"

import {
  onAuthStateChanged,
} from "firebase/auth"

import {
  doc,
  getDoc,
} from "firebase/firestore"

import {
  useEffect,
  useState,
} from "react"

import {
  auth,
  db,
} from "@/lib/firebase"

export default function Sidebar() {

  const router = useRouter()
  const [fullName, setFullName] =
  useState("")
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {
  
          if (user) {
  
            const userDoc = await getDoc(
              doc(db, "users", user.uid)
            )
  
            const userData =
              userDoc.data()
  
            setFullName(
              userData?.fullName || ""
            )
  
          }
  
        }
      )
  
    return () => unsubscribe()
  
  }, [])

  return (

    <>

      {/* DESKTOP SIDEBAR */}

      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-24 flex-col items-center border-r border-[#E2E8F0] bg-[#F8FAFC] py-8">

        <h1 className="mt-16 rotate-[-90deg] text-[48px] font-semibold tracking-[-0.04em]">

          <span className="text-[#0F172A]">
            Go
          </span>

          <span className="text-[#2563EB]">
            Global
          </span>

        </h1>

        <div className="mt-56 flex flex-col items-center gap-8">

          <Link
            href="/"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#DBEAFE]"
          >

<House className="h-[22px] w-[22px] text-[#475569] transition-all duration-300 group-hover:text-[#2563EB]" />

          </Link>

          <Link
            href="/explore"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#DBEAFE]"
          >

            <Search className="h-[22px] w-[22px] text-[#475569] transition-all duration-300 group-hover:text-[#2563EB]" />

          </Link>

          <button
            onClick={() => router.push("/saved")}
            className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#DBEAFE]"
          >

            <Bookmark className="h-[22px] w-[22px] text-[#475569] transition-all duration-300 group-hover:text-[#2563EB]" />

          </button>

          <button
            className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#DBEAFE]"
          >

            <Briefcase className="h-[22px] w-[22px] text-[#475569] transition-all duration-300 group-hover:text-[#2563EB]" />

          </button>

          <button
            className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#DBEAFE]"
          >

            <Calendar className="h-[22px] w-[22px] text-[#475569] transition-all duration-300 group-hover:text-[#2563EB]" />

          </button>

          <button
            onClick={() => router.push("/profile")}
            className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#DBEAFE]"
          >

            <Users  className="h-[22px] w-[22px] text-[#475569] transition-all duration-300 group-hover:text-[#2563EB]" />

          </button>

        </div>

      </aside>

      {/* MOBILE BOTTOM NAV */}

      <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-[#E2E8F0] bg-white px-2 py-3 lg:hidden">

        <Link
          href="/"
          className="flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#2563EB]"
        >

          <House className="h-5 w-5 text-[#475569]" />

        </Link>

        <Link
          href="/explore"
          className="flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#2563EB]"
        >

          <Search className="h-5 w-5 text-[#475569]" />

        </Link>

        <button
          onClick={() => router.push("/saved")}
          className="flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#2563EB]"
        >

          <Bookmark className="h-5 w-5 text-[#475569]" />

        </button>

        <button className="flex flex-col items-center gap-1 transition-all duration-300 hover:text-[#2563EB]">

          <Briefcase className="h-5 w-5 text-[#475569]" />

        </button>

        <button
  onClick={() => router.push("/profile")}
  className="flex flex-col items-center gap-1"
>

  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6] text-sm font-semibold text-white">

    {fullName?.charAt(0) || "U"}

  </div>

</button>

      </div>

    </>

  )

}