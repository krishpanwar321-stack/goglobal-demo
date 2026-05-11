import {
    Brain,
    GraduationCap,
    Globe,
    Briefcase,
    Trophy,
    Laptop,
    Users,
    Sparkles,
  } from "lucide-react"
  
  const categories = [
    {
      title: "Artificial Intelligence",
      icon: Brain,
      desc: "Research labs, AI internships and global ML programs.",
    },
    {
      title: "Scholarships",
      icon: GraduationCap,
      desc: "Fully funded opportunities from top universities.",
    },
    {
      title: "Remote Roles",
      icon: Laptop,
      desc: "Global remote internships and freelance projects.",
    },
    {
      title: "Conferences",
      icon: Globe,
      desc: "International summits, forums and networking events.",
    },
    {
      title: "Fellowships",
      icon: Trophy,
      desc: "Leadership and impact-driven fellowship programs.",
    },
    {
      title: "Apprenticeships",
      icon: Briefcase,
      desc: "Hands-on industry learning with real organizations.",
    },
    {
      title: "Mentorships",
      icon: Users,
      desc: "Connect with experts and experienced professionals.",
    },
    {
      title: "Startup Programs",
      icon: Sparkles,
      desc: "Accelerators, incubators and founder opportunities.",
    },
  ]
  
  export default function TrendingCategories() {
    return (
      <section className="border-t border-zinc-200 px-10 py-24">
  
        {/* HEADER */}
  
        <div className="max-w-4xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Trending Categories
          </p>
  
          <h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-tight xl:text-5xl">
  
            Discover opportunities
  
            <span className="mt-2 block text-zinc-400">
              across every ambitious path.
            </span>
  
          </h2>
  
        </div>
  
        {/* GRID */}
  
        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
  
          {categories.map((item) => {
            const Icon = item.icon
  
            return (
              <div
                key={item.title}
                className="group rounded-[30px] border border-zinc-200 bg-zinc-50/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl"
              >
  
                {/* ICON */}
  
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white transition-all duration-300 group-hover:bg-black">
  
                  <Icon className="h-6 w-6 text-zinc-700 transition group-hover:text-white" />
  
                </div>
  
                {/* CONTENT */}
  
                <h3 className="mt-8 text-[30px] font-semibold leading-tight text-black">
  
                  {item.title}
  
                </h3>
  
                <p className="mt-5 text-[15px] leading-8 text-zinc-600">
  
                  {item.desc}
  
                </p>
  
                {/* LINK */}
  
                <button className="mt-8 text-sm font-medium text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
  
                  Explore Category →
  
                </button>
  
              </div>
            )
          })}
  
        </div>
  
      </section>
    )
  }