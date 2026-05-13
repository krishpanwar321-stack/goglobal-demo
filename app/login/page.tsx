
import Link from "next/link"

export default function LoginPage() {
    return (
      <main className="ml-24 flex min-h-screen bg-zinc-50">

  {/* LEFT SIDE */}

  <section className="hidden flex-1 flex-col justify-center border-r border-zinc-200 bg-white px-16 py-20 lg:flex">

    <div className="max-w-xl">

      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
        GoGlobal
      </p>

      <h1 className="mt-8 text-6xl font-bold leading-[1.02] tracking-tight text-black">

        Discover opportunities
        <span className="text-zinc-400">
          {" "}beyond borders.
        </span>

      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-600">

        Access internships, fellowships, scholarships,
        conferences and global programs curated for ambitious students.

      </p>

      {/* STATS */}

      <div className="mt-10 flex gap-4">

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-5">

          <p className="text-3xl font-bold text-black">
            1200+
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Global Opportunities
          </p>

        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-5">

          <p className="text-3xl font-bold text-black">
            85+
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Countries
          </p>

        </div>

      </div>

    </div>

  </section>

  {/* RIGHT SIDE */}

  <section className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-20">

    <div className="w-full max-w-lg rounded-[32px] border border-zinc-200 bg-white p-12 shadow-sm">

      {/* TOP */}

      <div className="mb-5 inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-600">
        Student Access
      </div>

      <div>

        <h2 className="text-4xl font-bold tracking-tight text-black">
          Welcome back
        </h2>

        <p className="mt-3 text-zinc-600">
          Login to continue exploring global opportunities.
        </p>

      </div>

      {/* FORM */}

      <form className="mt-10 space-y-5">

        {/* EMAIL */}

        <div>

          <label className="mb-2 block text-sm font-medium text-black">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-black outline-none transition placeholder:text-zinc-400 focus:border-black"
          />

        </div>

        {/* PASSWORD */}

        <div>

          <label className="mb-2 block text-sm font-medium text-black">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-black outline-none transition placeholder:text-zinc-400 focus:border-black"
          />

        </div>

        {/* FORGOT */}

        <div className="flex justify-end">

          <button
            type="button"
            className="text-sm text-zinc-500 transition hover:text-black"
          >
            Forgot password?
          </button>

        </div>

        {/* LOGIN BUTTON */}

        <Link
          href="/explore"
          className="block w-full rounded-2xl bg-black py-4 text-center font-medium text-white transition hover:opacity-90"
        >
          Login
        </Link>

      </form>

      {/* DIVIDER */}

      <div className="my-6 flex items-center gap-4">

        <div className="h-px flex-1 bg-zinc-200" />

        <span className="text-sm text-zinc-400">
          OR
        </span>

        <div className="h-px flex-1 bg-zinc-200" />

      </div>

      {/* GOOGLE */}

      <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-zinc-300 bg-white py-4 text-[15px] font-medium text-zinc-800 transition hover:bg-zinc-50">

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="h-5 w-5"
>
  <path
    fill="#FFC107"
    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
  />
  <path
    fill="#FF3D00"
    d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
  />
  <path
    fill="#4CAF50"
    d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
  />
  <path
    fill="#1976D2"
    d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.4 5.5-6.5 6.9l6.2 5.2C39.7 36.3 44 30.7 44 24c0-1.3-.1-2.3-.4-3.5z"
  />
</svg>

Continue with Google

</button>

      {/* FOOTER */}

      <p className="mt-8 text-center text-sm text-zinc-600">

        Don’t have an account?{" "}

        <Link
          href="/signup"
          className="font-semibold text-black"
        >
          Sign up
        </Link>

      </p>

    </div>

  </section>

   </main>
    )
  }