import Link from "next/link"
import {
  Search,
  Bell,
} from "lucide-react"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-10">

       {/* LEFT */}

<div className="flex items-center gap-10">

{/* LOGO SPACE */}

<Link
  href="/"
  className="flex h-12 w-[140px] items-center"
>

  {/* ADD YOUR LOGO IMAGE HERE LATER */}

  {/* 
  <Image
    src="/logo.png"
    alt="GoGlobal"
    width={140}
    height={40}
  />
  */}

</Link>

          {/* NAV LINKS */}
          <div className="hidden md:block" />

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* SEARCH */}

          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 transition hover:border-zinc-300 hover:bg-white">

            <Search className="h-5 w-5 text-zinc-600" />

          </button>

          {/* NOTIFICATIONS */}

          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 transition hover:border-zinc-300 hover:bg-white">

            <Bell className="h-5 w-5 text-zinc-600" />

          </button>

          {/* LOGIN */}

          <Link
            href="/login"
            className="text-[15px] font-medium text-zinc-700 transition hover:text-black"
          >
            Login
          </Link>

          {/* CTA */}

          <Link
            href="/signup"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Sign up
          </Link>

        </div>

      </div>

    </nav>
  )
}