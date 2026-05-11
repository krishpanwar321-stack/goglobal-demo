import {
    Brain,
    GraduationCap,
    Briefcase,
    BarChart3,
    Megaphone,
    Network,
    Cpu,
    BookOpen,
    ChevronRight,
  } from "lucide-react"
  
  const categories = [
    {
      name: "AI",
      icon: Brain,
    },
    {
      name: "Research",
      icon: GraduationCap,
    },
    {
      name: "Internships",
      icon: Briefcase,
    },
    {
      name: "Data Science",
      icon: BarChart3,
    },
    {
      name: "Marketing",
      icon: Megaphone,
    },
    {
      name: "Networking",
      icon: Network,
    },
    {
      name: "Machine Learning",
      icon: Cpu,
    },
    {
      name: "Scholarships",
      icon: BookOpen,
    },
  ]
  
  export default function FilterBar() {
    return (
        <section className="border-b border-zinc-200 bg-white px-10 py-3">
      
             <div className="flex items-center gap-10">
      
            {/* SEARCH */}
      
            <div className="w-[360px] shrink-0">
      
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
      
            <div className="flex flex-1 items-center justify-between">
      
              {categories.map((item) => {
                const Icon = item.icon
      
                return (
                  <button
                    key={item.name}
                    className="group flex min-w-[88px] flex-col items-center gap-2"
                  >
      
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 transition group-hover:border-black group-hover:bg-black">
      
                      <Icon className="h-5 w-5 text-zinc-700 transition group-hover:text-white" />
      
                    </div>
      
                    <span className="whitespace-nowrap text-[13px] font-medium text-zinc-700">
                      {item.name}
                    </span>
      
                  </button>
                )
              })}
      
            </div>
      
            {/* ARROW */}
      
            <button className="ml-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-100">
      
              <ChevronRight className="h-5 w-5" />
      
            </button>
      
          </div>
      
        </section>
      )
  }