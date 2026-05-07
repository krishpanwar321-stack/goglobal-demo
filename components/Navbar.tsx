import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-200 bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          GoGlobal
        </Link>

        {/* CENTER LINKS */}

        <div className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">

          <Link href="/explore">
            Explore
          </Link>

          <Link href="/recruit">
            Recruit
          </Link>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="text-sm text-zinc-700"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white"
          >
            Sign up
          </Link>

        </div>

      </div>

    </nav>
  )
}