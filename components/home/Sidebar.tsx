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
import { useRouter } from "next/navigation"
export default function Sidebar() {
  const router = useRouter()
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-24 flex-col items-center border-r border-zinc-200 bg-zinc-50 py-8">

      <h1 className="mt-20 rotate-[-90deg] text-[52px] font-bold tracking-tight">
        <span className="text-black">Go</span>
        <span className="text-zinc-400">Global</span>
      </h1>

      <div className="mt-56 flex flex-col items-center gap-8">

  <Link
    href="/"
    className="flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-zinc-100"
  >

    <House className="h-[22px] w-[22px] text-zinc-600" />

  </Link>

  <Link
    href="/explore"
    className="flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-zinc-100"
  >

    <Search className="h-[22px] w-[22px] text-zinc-600" />

  </Link>

  <button
  onClick={() => router.push("/saved")}
  className="flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-zinc-100"
>

  <Bookmark className="h-[22px] w-[22px] text-zinc-600" />

</button>

  <button
    className="flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-zinc-100"
  >

    <Briefcase className="h-[22px] w-[22px] text-zinc-600" />

  </button>

  <button
    className="flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-zinc-100"
  >

    <Calendar className="h-[22px] w-[22px] text-zinc-600" />

  </button>

  <button
    onClick={() => router.push("/profile")}
    className="flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-zinc-100"
  >

    <Users className="h-[22px] w-[22px] text-zinc-600" />

  </button>

</div>

    </aside>
  )
}