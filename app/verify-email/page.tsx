import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
        {/* LEFT BLACK STRIP */}

<div className="absolute left-0 top-0 h-full w-[84px] bg-black" />
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}

        <section className="hidden flex-1 flex-col justify-center border-r border-zinc-200 bg-white pl-40 pr-16 py-20 lg:flex">

  <div className="max-w-xl">

    <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
      GoGlobal
    </p>

    <h1 className="mt-8 text-6xl font-bold leading-[1.02] tracking-tight text-black">

      Verify your
      <span className="text-zinc-400">
        {" "}email.
      </span>

    </h1>

    <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-600">

      You're one step away from accessing internships,
      fellowships, scholarships and global opportunities
      curated for ambitious students.

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

        <section className="flex items-center justify-center px-10">

          <div className="w-full max-w-md rounded-[32px] border border-zinc-200 bg-white p-10 shadow-sm">

            {/* TOP BADGE */}

            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2 text-sm text-zinc-700">

              Email Verification

            </div>

            {/* ICON */}

            <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-black">

              <Mail className="h-10 w-10 text-white" />

            </div>

            {/* CONTENT */}

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-black">

              Check your inbox

            </h1>

            <p className="mt-5 text-[16px] leading-8 text-zinc-600">

              We’ve sent a verification link to your email address.

              Please check your inbox and spam folder to verify your account before continuing.

            </p>

            {/* EMAIL */}

            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-5">

              <p className="text-sm text-zinc-500">
                Verification sent to
              </p>

              <p className="mt-1 text-lg font-semibold text-black">
                krish@example.com
              </p>

            </div>

            {/* BUTTONS */}

            <div className="mt-8 space-y-4">

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-5 text-lg font-medium text-white transition hover:opacity-90">

                I’ve verified my email

                <ArrowRight className="h-5 w-5" />

              </button>

              <button className="w-full rounded-2xl border border-zinc-300 bg-white py-5 text-lg font-medium text-black transition hover:bg-zinc-100">

                Resend verification email

              </button>

            </div>

            {/* FOOTER */}

            <p className="mt-8 text-center text-sm text-zinc-500">

              Wrong email?{" "}

              <Link
                href="/signup"
                className="font-medium text-black"
              >
                Change email
              </Link>

            </p>

          </div>

        </section>

      </div>

    </main>
  )
}