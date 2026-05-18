"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import { onAuthStateChanged } from "firebase/auth"

import { auth, db } from "@/lib/firebase"
import {
  doc,
  getDoc,
} from "firebase/firestore"

export default function Topbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [fullName, setFullName] = useState("")
  const [role, setRole] = useState("")
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, async (user) => {
  
        if (user) {

  
          setIsLoggedIn(true)
  
          const userDoc = await getDoc(
            doc(db, "users", user.uid)
          )
  
          const userData = userDoc.data()
  
          setFullName(userData?.fullName || "")
          setRole(userData?.role || "student")
  
        } else {
  
          setIsLoggedIn(false)
  
        }
  
      })
  
    return () => unsubscribe()
  
  }, [])
  return (
    <header className="flex flex-col gap-5 border-b border-zinc-200 bg-white px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-6">

        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium sm:gap-7 lg:gap-10">

        <Link href="/explore">
          Explore
        </Link>

        <button>
          Categories
        </button>

        <button>
          Events
        </button>

        <button>
          About
        </button>

       

      </nav>

      <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-normal sm:gap-4">

  {!isLoggedIn ? (

    <>

      <Link href="/login">
        Login
      </Link>

      <Link
        href="/signup"
        className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
      >
        Sign up
      </Link>

    </>

  ) : (

    <>

      <Link
        href={
          role === "recruiter"
            ? "/recruit/dashboard"
            : "/dashboard"
        }
        className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium sm:px-5"
      >
        {role === "recruiter"
  ? "Recruit Dashboard"
  : "Dashboard"}
      </Link>

      <Link
  href="/profile"
  className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white transition hover:scale-105"
>

  {fullName?.charAt(0) || "U"}

</Link>

    </>

  )}

</div>

    </header>
  )
}