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

        <section className="px-5 py-10 sm:px-8 lg:px-12">

<div className="mx-auto max-w-5xl rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm sm:p-12">

  <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8B7355]">
    Company
  </p>

  <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#2B1D16] sm:text-5xl">
    Contact Us
  </h1>

  <p className="mt-4 max-w-2xl leading-8 text-[#6B5B52]">
    Have questions, suggestions, partnership opportunities or feedback?
    We'd love to hear from you. Reach out through any of the channels below.
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-2">

    {/* EMAIL 1 */}

    <div className="rounded-3xl border border-[#E7DDD1] bg-[#F8F5F0] p-6">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B7355]">
        Email 1
      </p>

      <p className="mt-3 text-lg font-semibold text-[#2B1D16]">
        Adding Soon
      </p>

    </div>

    {/* EMAIL 2 */}

    <div className="rounded-3xl border border-[#E7DDD1] bg-[#F8F5F0] p-6">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B7355]">
        Email 2
      </p>

      <p className="mt-3 text-lg font-semibold text-[#2B1D16]">
        Adding Soon
      </p>

    </div>

    {/* INSTAGRAM */}

    <div className="rounded-3xl border border-[#E7DDD1] bg-[#F8F5F0] p-6">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B7355]">
        Instagram
      </p>

      <p className="mt-3 text-lg font-semibold text-[#2B1D16]">
        Adding Soon
      </p>

    </div>

    {/* LINKEDIN */}

    <div className="rounded-3xl border border-[#E7DDD1] bg-[#F8F5F0] p-6">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B7355]">
        LinkedIn
      </p>

      <p className="mt-3 text-lg font-semibold text-[#2B1D16]">
        Adding Soon
      </p>

    </div>

  </div>

  <div className="mt-12 rounded-3xl border border-[#E7DDD1] bg-[#F8F5F0] p-8 text-center">

    <h2 className="text-2xl font-semibold text-[#2B1D16]">
      Building Something Global
    </h2>

    <p className="mt-4 max-w-2xl mx-auto leading-8 text-[#6B5B52]">
      We're currently setting up dedicated communication channels
      for students, recruiters, partners and organizations around
      the world. Stay tuned.
    </p>

  </div>

</div>

</section>

      </div>

    </main>
  )
}