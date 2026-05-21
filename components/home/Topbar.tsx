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

    <header className="border-b border-zinc-200 bg-white">
  
      {/* TOP ROW */}
  
      <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-6">
  
        {/* LOGO */}
  
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight lg:hidden"
        >
  
          <span className="text-black">
            Go
          </span>
  
          <span className="text-zinc-400">
            Global
          </span>
  
        </Link>
  
        {/* DESKTOP NAV */}
  
        <nav className="hidden items-center gap-10 text-sm font-medium lg:flex">
  
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
  
        {/* RIGHT */}
  
        <div className="hidden items-center gap-4 lg:flex">
  
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
                className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium"
              >
  
                {role === "recruiter"
                  ? "Recruit Dashboard"
                  : "Dashboard"}
  
              </Link>
  
              <Link
                href="/profile"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white"
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
  
        <div className="border-t border-zinc-200 px-5 py-5 lg:hidden">
  
          <div className="flex flex-col gap-5 text-sm font-medium">
  
            <Link href="/explore">
              Explore
            </Link>
  
            <button className="text-left">
              Categories
            </button>
  
            <button className="text-left">
              Events
            </button>
  
            <button className="text-left">
              About
            </button>
  
            <div className="mt-4 flex items-center gap-4">
  
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
                    className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium"
                  >
  
                    Dashboard
  
                  </Link>
  
                  <Link
                    href="/profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white"
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