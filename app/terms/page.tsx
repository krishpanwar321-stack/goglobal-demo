"use client"

import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#2B1D16]">

      <Sidebar />

      <div className="lg:ml-24">

        <Topbar />

        <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-8 sm:px-6 sm:py-10">

        <div className="w-full max-w-2xl rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-6 text-center shadow-sm shadow-[#E7DDD1]/40 sm:rounded-[40px] sm:p-12">

        <h1 className="text-3xl font-bold tracking-tight text-[#2B1D16] sm:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 text-sm text-[#8B7355] sm:text-base">
              Coming soon.
            </p>

          </div>

        </section>

      </div>

    </main>
  )
}
