import {
    GraduationCap,
    Laptop,
    Globe,
    Trophy,
    Briefcase,
    Users,
    Sparkles,
    BadgeDollarSign,
    ChevronRight,
  } from "lucide-react"
  
  const categories = [
    {
      title: "Scholarships",
      icon: GraduationCap,
    },
    {
      title: "Remote Roles",
      icon: Laptop,
    },
    {
      title: "Conferences",
      icon: Globe,
    },
    {
      title: "Fellowships",
      icon: Trophy,
    },
    {
      title: "Apprenticeships",
      icon: Briefcase,
    },
    {
      title: "Mentorships",
      icon: Users,
    },
    {
      title: "Startup Programs",
      icon: Sparkles,
    },
    {
      title: "Freelancing",
      icon: BadgeDollarSign,
    },
  ]
  
  export default function FilterBar() {
    return (
        <section className="border-b border-zinc-200 bg-white px-8 py-3">
  
         <div className="flex items-center gap-6">
  
          {/* SEARCH */}
  
          <div className="w-[340px] shrink-0">
  
            <div className="flex h-12 items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-5">
  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
  
              <input
                type="text"
                placeholder="Search opportunities..."
                className="ml-4 w-full bg-transparent text-[15px] outline-none placeholder:text-zinc-400"
              />
  
            </div>
  
          </div>
  
          {/* CATEGORY STRIP */}
  
          <div className="flex flex-1 items-center justify-between gap-5">
  
            {categories.map((item) => {
              const Icon = item.icon
  
              return (
                <button
                  key={item.title}
                  className="group flex min-w-[105px] flex-col items-center gap-2"
                >
  
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 transition-all duration-300 group-hover:border-black group-hover:bg-black">
  
                    <Icon className="h-5 w-5 text-zinc-700 transition group-hover:text-white" />
  
                  </div>
  
                  <span className="whitespace-nowrap text-[13px] font-medium text-zinc-700 transition group-hover:text-black">
  
                    {item.title}
  
                  </span>
  
                </button>
              )
            })}
  
          </div>
  
          {/* ARROW */}
  
          <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition hover:bg-black hover:text-white">
  
            <ChevronRight className="h-5 w-5" />
  
          </button>
  
        </div>
  
      </section>
    )
  }