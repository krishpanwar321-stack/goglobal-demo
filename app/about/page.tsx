"use client"

import Link from "next/link"
import { Globe2 } from "lucide-react"
import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-black">
      
          <Sidebar />
      
          <div className="lg:ml-24">
      
            <Topbar />
      
            <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-10">
      
              <div className="w-full max-w-3xl rounded-[40px] border border-zinc-200 bg-white p-10 text-center shadow-sm">
      
                {/* ICON */}
      
                <div className="mx-auto flex h-24 w-24 animate-spin items-center justify-center rounded-full bg-black">
      
                  <Globe2 className="h-10 w-10 text-white" />
      
                </div>
      
                {/* TEXT */}
      
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                  About GoGlobal
                </p>
      
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl">
      
                  Building the future
      
                  <span className="text-zinc-400">
                    {" "}of opportunity discovery.
                  </span>
      
                </h1>
      
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
      
                  GoGlobal helps ambitious students discover internships,
                  fellowships, scholarships, hackathons and global opportunities
                  without the noise.
      
                </p>
      
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-500">
      
                  This page is currently under development as we continue
                  building the platform experience.
      
                </p>
      
                {/* BUTTON */}
      
                <Link
  href="/"
  className="mt-10 inline-flex rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
>
  Back to Home
</Link>
      
              </div>
      
            </section>
      
          </div>
      
        </main>
      )
 
}