"use client"

import Link from "next/link"
import {
  House,
  Search,
  Bookmark,
  Briefcase,
  Calendar,
  Users,
} from "lucide-react"

export default function Sidebar() {
  return (
      <aside className="fixed left-0 top-0 flex h-screen w-24 flex-col items-center border-r border-zinc-200 bg-zinc-50 py-8">

      <h1 className="mt-20 rotate-[-90deg] text-[52px] font-bold tracking-tight">
        <span className="text-black">Go</span>
        <span className="text-zinc-400">Global</span>
      </h1>

      <div className="mt-56 flex flex-col gap-8">

        <Link href="/">
          <House className="h-[22px] w-[22px] text-zinc-600 transition hover:scale-110 hover:text-black"/>
        </Link>

        <Link href="/explore">
          <Search className="h-[22px] w-[22px] text-zinc-600 transition hover:scale-110 hover:text-black" />
        </Link>

        <Bookmark className="h-[22px] w-[22px] text-zinc-600 transition hover:scale-110 hover:text-black" />

        <Briefcase className="h-[22px] w-[22px] text-zinc-600 transition hover:scale-110 hover:text-black" />

        <Calendar className="h-[22px] w-[22px] text-zinc-600 transition hover:scale-110 hover:text-black" />

        <Users className="h-[22px] w-[22px] text-zinc-600 transition hover:scale-110 hover:text-black" />

      </div>

    </aside>
  )
}