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
      
            <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-10">
      
              <div className="w-full max-w-2xl rounded-[40px] border border-zinc-200 bg-white p-10 text-center shadow-sm">
      
                {/* ANIMATION */}
      
                <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-black">
      
                  <Sparkles className="h-10 w-10 text-white" />
      
                </div>
      
                {/* TEXT */}
      
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                  GoGlobal
                </p>
      
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl">
      
                  Categories page
      
                  <span className="text-zinc-400">
                    {" "}coming soon.
                  </span>
      
                </h1>
      
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600">
      
                  We’re building a smarter category discovery experience
                  to help students explore opportunities faster and better.
      
                </p>
      
                {/* BUTTON */}
      
                <Link
                  href="/explore"
                  className="mt-10 inline-flex rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  Explore Opportunities
                </Link>
      
              </div>
      
            </section>
      
          </div>
      
        </main>
      )
}