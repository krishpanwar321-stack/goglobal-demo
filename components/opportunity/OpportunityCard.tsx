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
      <div className="group rounded-[32px] border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
  
        <div className="flex items-start justify-between">
  
          <div>
  
            <p className="text-sm text-zinc-500">
              {organization}
            </p>
  
            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight">
              {title}
            </h2>
  
          </div>
  
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium">
            {mode}
          </span>
  
        </div>
  
        <p className="mt-5 text-[15px] leading-7 text-zinc-600">
          {description}
        </p>
  
        <div className="mt-6 flex flex-wrap gap-2">
  
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium">
            {type}
          </span>
  
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium">
            {location}
          </span>
  
        </div>
  
        <div className="mt-8 flex items-center justify-between">
  
          <p className="text-sm text-zinc-500">
            Deadline: {deadline}
          </p>
  
          <Link
  href={`/opportunity/${id}`}
   className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
>
  View Details
</Link>
  
        </div>
  
      </div>
    )
  }