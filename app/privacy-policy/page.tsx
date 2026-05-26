"use client"

import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-black">

      <Sidebar />

      <div className="lg:ml-24">

        <Topbar />

        <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-10">

          <div className="rounded-[40px] border border-zinc-200 bg-white p-12 text-center shadow-sm">

            <h1 className="text-5xl font-bold">
              Privacy Policy
            </h1>

            <p className="mt-6 text-zinc-500">
              Coming soon.
            </p>

          </div>

        </section>

      </div>

    </main>
  )
}