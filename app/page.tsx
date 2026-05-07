import Link from "next/link"
import OpportunityCard from "@/components/opportunity/OpportunityCard"
import Button from "@/components/ui/Button"
const featuredOpportunities = [
  {
    id: "google-internship",
    organization: "Google",
    title: "Software Engineering Internship",
    description:
      "Work on impactful global engineering projects with Google teams.",
    type: "Internship",
    location: "USA",
    mode: "Remote",
    deadline: "May 28",
  },

  {
    id: "mitacs-fellowship",
    organization: "MITACS",
    title: "Global Research Fellowship",
    description:
      "Fully funded international research fellowship opportunity in Canada.",
    type: "Fellowship",
    location: "Canada",
    mode: "On-site",
    deadline: "June 10",
  },

  {
    id: "unicef-internship",
    organization: "UNICEF",
    title: "Global Innovation Internship",
    description:
      "Support innovation and research initiatives with UNICEF teams.",
    type: "Internship",
    location: "Remote",
    mode: "Remote",
    deadline: "June 18",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-black">

      {/* HERO */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 md:py-28 text-center">

        <p className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm">
          Global opportunities platform
        </p>

        <h1 className="mt-8 max-w-5xl text-5xl md:text-7xl font-bold tracking-tight md:text-7xl">
          Discover global opportunities without the noise.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
          Internships, fellowships, research programs, and global careers curated for ambitious students.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/explore"
            className="rounded-2xl bg-black px-8 py-4 text-white transition hover:bg-zinc-800"
          >
            Explore Opportunities
          </Link>

          <Link
            href="/recruit"
            className="rounded-2xl border border-zinc-300 bg-white px-8 py-4 transition hover:bg-zinc-100"
          >
            Recruit Talent
          </Link>

        </div>

      </section>

      {/* FEATURED */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div>

          <p className="text-sm text-zinc-500">
            Featured Opportunities
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Curated global opportunities.
          </h2>

        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 grid-cols-1 md:grid-cols-3">

          {featuredOpportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              id={opportunity.id}
              organization={opportunity.organization}
              title={opportunity.title}
              description={opportunity.description}
              type={opportunity.type}
              location={opportunity.location}
              mode={opportunity.mode}
              deadline={opportunity.deadline}
            />
          ))}

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <p className="text-sm text-zinc-500">
          Categories
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Explore by category.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">

          {[
            "Internships",
            "Fellowships",
            "Research",
            "Remote",
            "Competitions",
          ].map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-zinc-200 bg-white px-6 py-4 text-sm shadow-sm"
            >
              {category}
            </div>
          ))}

        </div>

      </section>

      {/* WHY GOGLOBAL */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-sm md:p-14">

          <p className="text-sm text-zinc-500">
            Why GoGlobal
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">
            Built for ambitious students who want better opportunities.
          </h2>

          <div className="mt-14 grid gap-8 grid-cols-1 grid-cols-1 md:grid-cols-3">

            <div>

              <h3 className="text-xl font-semibold">
                Curated Opportunities
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                No spam. No clutter. Only high-quality global opportunities.
              </p>

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                Fast Discovery
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Discover internships and fellowships in seconds with powerful filters.
              </p>

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                Global Access
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Opportunities from top organizations worldwide.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-5xl px-6 pb-32 text-center">

        <h2 className="text-5xl font-semibold tracking-tight">
          Your next opportunity is waiting.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
          Join students discovering internships and fellowships worldwide.
        </p>

        <Link
          href="/signup"
          className="mt-10 inline-block rounded-2xl bg-black px-8 py-4 text-white transition hover:bg-zinc-800"
        >
          Get Started
        </Link>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-zinc-600 md:flex-row">

          <p>
            © 2026 GoGlobal.
          </p>

          <div className="flex items-center gap-6">

            <Link href="/explore">
              Explore
            </Link>

            <Link href="/recruit">
              Recruit
            </Link>

            <Link href="/login">
              Login
            </Link>

          </div>

        </div>

      </footer>

    </main>
  )
}