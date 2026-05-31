"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-black">

      <Sidebar />

      <div className="lg:ml-24">

        <Topbar />

        <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-8 sm:px-6 sm:py-10">

        <div className="w-full max-w-2xl rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-6 text-center shadow-sm sm:rounded-[40px] sm:p-10">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2B1D16] sm:h-24 sm:w-24">

        <Mail className="h-8 w-8 text-white sm:h-10 sm:w-10" />

            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#8B7355]">
              Contact GoGlobal
            </p>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#2B1D16] sm:text-5xl">

              Contact page

              <span className="text-[#D6B08C]">
                {" "}coming soon.
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#6B5B52] sm:text-lg sm:leading-8">

              We’re building support, feedback and partnership
              systems for the GoGlobal community.

            </p>

            <Link
  href="/"
  className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-[#2563EB] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#1D4ED8] sm:w-auto"
>
  Back to Home
</Link>

          </div>

        </section>

      </div>

    </main>
  )
}