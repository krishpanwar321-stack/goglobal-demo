import Link from "next/link"

export default function SignupPage() {
  return (
    <main className="ml-24 flex min-h-screen bg-zinc-50">

      {/* LEFT SIDE */}

      <section className="hidden flex-1 flex-col justify-center border-r border-zinc-200 bg-white px-16 py-20 lg:flex">

        <div className="max-w-xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            GoGlobal
          </p>

          <h1 className="mt-8 text-6xl font-bold leading-[1.02] tracking-tight text-black">

            Build your future
            <span className="text-zinc-400">
              {" "}globally.
            </span>

          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-600">

            Join ambitious students discovering internships,
            fellowships, scholarships and opportunities worldwide.

          </p>

          {/* STATS */}

          <div className="mt-10 flex gap-4">

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-5">

              <p className="text-3xl font-bold text-black">
                4K+
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Opportunities
              </p>

            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-5">

              <p className="text-3xl font-bold text-black">
                80+
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
            Student Signup
          </div>

          <div>

            <h2 className="text-4xl font-bold tracking-tight text-black">
              Create account
            </h2>

            <p className="mt-3 text-zinc-600">
              Start discovering global opportunities today.
            </p>

          </div>

          {/* FORM */}
          <form className="mt-10 space-y-5">

  {/* NAME */}

  <div>

    <label className="mb-2 block text-sm font-medium text-black">
      Full Name
    </label>

    <input
      type="text"
      placeholder="John Doe"
      className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-black outline-none transition placeholder:text-zinc-400 focus:border-black"
    />

  </div>

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
      placeholder="Create a password"
      className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-black outline-none transition placeholder:text-zinc-400 focus:border-black"
    />

  </div>

  {/* COUNTRY */}

  <div>

    <label className="mb-2 block text-sm font-medium text-black">
      Home Country
    </label>

    <select
      className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-[15px] font-medium text-zinc-900 outline-none transition focus:border-black"
    >

<option>Select your country</option>

<option>Afghanistan</option>
<option>Argentina</option>
<option>Australia</option>
<option>Austria</option>
<option>Bangladesh</option>
<option>Belgium</option>
<option>Brazil</option>
<option>Canada</option>
<option>China</option>
<option>Denmark</option>
<option>Egypt</option>
<option>Finland</option>
<option>France</option>
<option>Germany</option>
<option>Greece</option>
<option>Hong Kong</option>
<option>India</option>
<option>Indonesia</option>
<option>Ireland</option>
<option>Israel</option>
<option>Italy</option>
<option>Japan</option>
<option>Kenya</option>
<option>Malaysia</option>
<option>Mexico</option>
<option>Netherlands</option>
<option>New Zealand</option>
<option>Nigeria</option>
<option>Norway</option>
<option>Pakistan</option>
<option>Philippines</option>
<option>Poland</option>
<option>Portugal</option>
<option>Qatar</option>
<option>Russia</option>
<option>Saudi Arabia</option>
<option>Singapore</option>
<option>South Africa</option>
<option>South Korea</option>
<option>Spain</option>
<option>Sri Lanka</option>
<option>Sweden</option>
<option>Switzerland</option>
<option>Taiwan</option>
<option>Thailand</option>
<option>Turkey</option>
<option>Ukraine</option>
<option>United Arab Emirates</option>
<option>United Kingdom</option>
<option>United States</option>
<option>Vietnam</option>
    </select>

  </div>

  {/* CREATE ACCOUNT */}

  <Link
    href="/verify-email"
    className="block w-full rounded-2xl bg-black py-4 text-center font-medium text-white transition hover:opacity-90"
  >
    Continue
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

</button>b

          {/* FOOTER */}

          <p className="mt-8 text-center text-sm text-zinc-600">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-black"
            >
              Login
            </Link>

          </p>

        </div>

      </section>

    </main>
  )
}