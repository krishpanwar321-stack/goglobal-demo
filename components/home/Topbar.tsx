import Link from "next/link"

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-10 py-6">

      <nav className="flex items-center gap-10 text-sm font-medium">

        <Link href="/explore">
          Explore
        </Link>

        <button>
          Categories
        </button>

        <button>
          Events
        </button>

        <button>
          About
        </button>

        <Link href="/recruit">
          For Recruiters
        </Link>

      </nav>

      <div className="flex items-center gap-4">

        <Link href="/login">
          Login
        </Link>

        <Link
          href="/signup"
          className="rounded-xl bg-black px-5 py-3 text-white"
        >
          Sign up
        </Link>

      </div>

    </header>
  )
}