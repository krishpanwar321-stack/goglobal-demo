import Link from "next/link"

export default function InterestsPage() {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* LEFT BLACK STRIP */}

      <div className="fixed left-0 top-0 h-full w-[84px] bg-black" />

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}

        <section className="hidden flex-1 flex-col justify-center border-r border-zinc-200 bg-white pl-40 pr-16 py-20 lg:flex">

          <div className="max-w-xl">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              GoGlobal
            </p>

            <h1 className="mt-8 text-6xl font-bold leading-[1.02] tracking-tight text-black">

              Personalize your
              <span className="text-zinc-400">
                {" "}experience.
              </span>

            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-600">

              We’re building a smarter onboarding system
              to personalize opportunities based on your
              interests and global goals.

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

        <section className="flex items-center justify-center px-6 py-20">

          <div className="w-full max-w-md rounded-[32px] border border-zinc-200 bg-white p-10 shadow-sm">

            {/* BADGE */}

            <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-600">

              Coming Soon

            </div>

            {/* TITLE */}

            <h2 className="mt-8 text-4xl font-bold tracking-tight text-black">

              Interest onboarding
              <span className="block text-zinc-400">
                is on the way.
              </span>

            </h2>

            {/* TEXT */}

            <p className="mt-6 text-[16px] leading-8 text-zinc-600">

              Soon you'll be able to personalize your feed
              based on interests, career goals and global
              opportunity preferences.

            </p>

            {/* BUTTON */}

            <Link
              href="/dashboard"
              className="mt-10 flex w-full items-center justify-center rounded-2xl bg-black py-4 text-center text-lg font-medium text-white transition hover:opacity-90"
            >

              Continue to Dashbaord

            </Link>

          </div>

        </section>

      </div>

    </main>
  )
}