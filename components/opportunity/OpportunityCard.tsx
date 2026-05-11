import Link from "next/link"

type OpportunityCardProps = {
    id: string
    organization: string
    title: string
    description: string
    type: string
    location: string
    mode: string
    deadline: string
  }
  
  export default function OpportunityCard({
    id,
    organization,
    title,
    description,
    type,
    location,
    mode,
    deadline,
  }: OpportunityCardProps) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
  
        <div className="flex items-start justify-between">
  
          <div>
  
            <p className="text-sm text-zinc-500">
              {organization}
            </p>
  
            <h2 className="mt-2 text-2xl font-semibold">
              {title}
            </h2>
  
          </div>
  
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
            {mode}
          </span>
  
        </div>
  
        <p className="mt-4 leading-7 text-zinc-600">
          {description}
        </p>
  
        <div className="mt-6 flex flex-wrap gap-2">
  
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
            {type}
          </span>
  
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
            {location}
          </span>
  
        </div>
  
        <div className="mt-8 flex items-center justify-between">
  
          <p className="text-sm text-zinc-500">
            Deadline: {deadline}
          </p>
  
          <Link
  href={`/opportunity/${id}`}
  className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
>
  View Details
</Link>
  
        </div>
  
      </div>
    )
  }