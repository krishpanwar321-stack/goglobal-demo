"use client"

import { useEffect, useState } from "react"

import {
  Menu,
  X,
} from "lucide-react"

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
  const [mobileMenuOpen, setMobileMenuOpen] =
  useState(false)
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

    <header className="border-b border-[#E2E8F0] bg-white">
  
      {/* TOP ROW */}
  
      <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-6">
  
        {/* LOGO */}
  
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight lg:hidden"
        >
  
  <span className="text-[#0F172A]">
            Go
          </span>
  
          <span className="text-[#3B82F6]">
            Global
          </span>
  
        </Link>
  
        {/* DESKTOP NAV */}
  
        <nav className="hidden items-center gap-10 text-sm font-medium lg:flex">

  <Link
    href="/explore"
    className="transition-all duration-300 hover:text-[#2563EB]"
  >
    Explore
  </Link>

  <Link
    href="/categories"
    className="transition-all duration-300 hover:text-[#2563EB]"
  >
    Categories
  </Link>

  <Link
    href="/events"
    className="transition-all duration-300 hover:text-[#2563EB]"
  >
    Events
  </Link>

  <Link
    href="/about"
    className="transition-all duration-300 hover:text-[#2563EB]"
  >
    About
  </Link>

</nav>
  
        {/* RIGHT */}
  
        <div className="hidden items-center gap-4 lg:flex">
  
          {!isLoggedIn ? (
  
            <>
  
  <Link
  href="/login"
  className="font-medium text-[#475569] transition-all duration-300 hover:text-[#2563EB]"
>
  Login
</Link>
  
              <Link
                href="/signup"
                className="rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2563EB]"
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
                className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-medium text-[#475569] transition-all duration-300 hover:border-[#3B82F6] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
              >
  
                {role === "recruiter"
                  ? "Recruit Dashboard"
                  : "Dashboard"}
  
              </Link>
  
              <Link
                href="/profile"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B82F6] text-sm font-semibold text-white"
              >
  
                {fullName?.charAt(0) || "U"}
  
              </Link>
  
            </>
  
          )}
  
        </div>
  
        {/* MOBILE MENU BUTTON */}
  
        <button
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          className="lg:hidden"
        >
  
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
  
        </button>
  
      </div>
  
      {/* MOBILE MENU */}
  
      {mobileMenuOpen && (
  
        <div className="border-t border-[#E2E8F0] px-5 py-5 lg:hidden">
  
          <div className="flex flex-col gap-5 text-sm font-medium">
  
            <Link href="/explore">
              Explore
            </Link>
  
            <Link
  href="/categories"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Categories
</Link>

<Link
  href="/events"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  Events
</Link>

<Link
  href="/about"
  className="text-left transition-all duration-300 hover:text-[#2563EB]"
>
  About
</Link>
  
            <div className="mt-4 flex items-center gap-4">
  
              {!isLoggedIn ? (
  
                <>
  
  <Link
  href="/login"
  className="font-medium text-[#475569] transition-all duration-300 hover:text-[#2563EB]"
>
  Login
</Link>
  
                  <Link
                    href="/signup"
                    className="rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2563EB]"
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
                    className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-medium text-[#475569] transition-all duration-300 hover:border-[#3B82F6] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                  >
  
  {role === "recruiter"
  ? "Recruit Dashboard"
  : "Dashboard"}
  
                  </Link>
  
                  <Link
                    href="/profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B82F6] text-sm font-semibold text-white"
                  >
  
                    {fullName?.charAt(0) || "U"}
  
                  </Link>
  
                </>
  
              )}
  
            </div>
  
          </div>
  
        </div>
  
      )}
  
    </header>
  
  )
     
}
