"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-black">
      
          <Sidebar />
      
          <div className="lg:ml-24">
      
            <Topbar />
      
            <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
      
            <div className="w-full max-w-2xl rounded-[32px] border border-zinc-200 bg-white p-6 text-center shadow-sm sm:rounded-[40px] sm:p-10">
      
                {/* ANIMATION */}
      
                <div className="mx-auto flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-black sm:h-24 sm:w-24">
      
                <Sparkles className="h-8 w-8 text-white sm:h-10 sm:w-10" />
      
                </div>
      
                {/* TEXT */}
      
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                  GoGlobal
                </p>
      
                <h1 className="mt-5 text-3xl font-bold tracking-tight text-black sm:text-5xl">
      
                  Categories page
      
                  <span className="text-zinc-400">
                    {" "}coming soon.
                  </span>
      
                </h1>
      
                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
      
                  We’re building a smarter category discovery experience
                  to help students explore opportunities faster and better.
      
                </p>
      
                {/* BUTTON */}
      
                <Link
                  href="/explore"
                  className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.02] sm:w-auto"
                >
                  Explore Opportunities
                </Link>
      
              </div>
      
            </section>
      
          </div>
      
        </main>
      )
}