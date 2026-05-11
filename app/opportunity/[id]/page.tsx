import Button from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"

const opportunities = [
    {
      id: "google-internship",
      organization: "Google",
      title: "Software Engineering Internship",
      description:
        "Work with Google's engineering teams on impactful global projects.",
      type: "Internship",
      location: "USA",
      mode: "Remote",
      deadline: "May 28, 2026",
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
      deadline: "June 10, 2026",
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
      deadline: "June 18, 2026",
    },
  
    {
      id: "harvard-research-program",
      organization: "Harvard",
      title: "International Research Program",
      description:
        "Collaborate with global researchers on interdisciplinary projects.",
      type: "Research",
      location: "USA",
      mode: "On-site",
      deadline: "July 2, 2026",
    },
  ]
  
  export default async function OpportunityPage({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
  
    const { id } = await params

const opportunity = opportunities.find(
  (item) => item.id === id
)
  
    if (!opportunity) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-50">
  
          <h1 className="text-3xl font-semibold">
            Opportunity not found
          </h1>
  
        </main>
      )
    }
  
    return (
      <main className="min-h-screen bg-zinc-50 text-black">
  
        {/* NAVBAR */}
  

  
        {/* CONTENT */}
  
        <section className="mx-auto max-w-4xl px-6 py-16">
  
          <p className="text-sm text-zinc-500">
            {opportunity.organization}
          </p>
  
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            {opportunity.title}
          </h1>

          {/* TAGS */}

<div className="mt-6 flex flex-wrap gap-3">

<Badge>
  {opportunity.type}
</Badge>

<Badge>
  {opportunity.location}
</Badge>

<Badge>
  {opportunity.mode}
</Badge>

</div>
  
          {/* DEADLINE */}
  
          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6">
  
            <p className="text-sm text-zinc-500">
              Application Deadline
            </p>
  
            <h2 className="mt-2 text-2xl font-semibold">
              {opportunity.deadline}
            </h2>
  
          </div>
  
          {/* DESCRIPTION */}

<div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">

{/* LEFT */}

<div>

  <div>

    <h2 className="text-3xl font-semibold">
      About this opportunity
    </h2>

    <p className="mt-6 leading-8 text-zinc-700">
      {opportunity.description}
    </p>

  </div>

  {/* ELIGIBILITY */}

  <div className="mt-14">

    <h2 className="text-3xl font-semibold">
      Eligibility
    </h2>

    <ul className="mt-6 space-y-4 text-zinc-700">

      <li>
        • Open to undergraduate and graduate students
      </li>

      <li>
        • Strong academic background preferred
      </li>

      <li>
        • Passion for global collaboration and innovation
      </li>

      <li>
        • Prior experience is a plus but not mandatory
      </li>

    </ul>

  </div>

  {/* RESPONSIBILITIES */}

  <div className="mt-14">

    <h2 className="text-3xl font-semibold">
      Responsibilities
    </h2>

    <ul className="mt-6 space-y-4 text-zinc-700">

      <li>
        • Collaborate with international teams
      </li>

      <li>
        • Participate in research and project execution
      </li>

      <li>
        • Contribute to innovation initiatives
      </li>

      <li>
        • Present findings and outcomes professionally
      </li>

    </ul>

  </div>

</div>

{/* RIGHT SIDEBAR */}

<div className="h-fit rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">

  <p className="text-sm text-zinc-500">
    Opportunity Overview
  </p>

  <div className="mt-8 space-y-6">

    <div>

      <p className="text-sm text-zinc-500">
        Organization
      </p>

      <h3 className="mt-1 text-lg font-semibold">
        {opportunity.organization}
      </h3>

    </div>

    <div>

      <p className="text-sm text-zinc-500">
        Opportunity Type
      </p>

      <h3 className="mt-1 text-lg font-semibold">
        {opportunity.type}
      </h3>

    </div>

    <div>

      <p className="text-sm text-zinc-500">
        Location
      </p>

      <h3 className="mt-1 text-lg font-semibold">
        {opportunity.location}
      </h3>

    </div>

    <div>

      <p className="text-sm text-zinc-500">
        Mode
      </p>

      <h3 className="mt-1 text-lg font-semibold">
        {opportunity.mode}
      </h3>

    </div>

    <div>

      <p className="text-sm text-zinc-500">
        Deadline
      </p>

      <h3 className="mt-1 text-lg font-semibold">
        {opportunity.deadline}
      </h3>

    </div>

  </div>

  {/* BUTTONS */}

  <div className="mt-10 space-y-4">

  <Button>
  Apply Now
</Button>

<Button variant="secondary">
  Save Opportunity
</Button>

  </div>

</div>

</div>
  
        </section>
  
      </main>
    )
  }