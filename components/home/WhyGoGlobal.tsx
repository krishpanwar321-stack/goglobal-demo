import {
    Globe2,
    Sparkles,
    Search,
    ShieldCheck,
  } from "lucide-react"
  
  const features = [
    {
      title: "Curated Globally",
      desc: "Discover handpicked opportunities from universities, startups, nonprofits and global organizations.",
      icon: Globe2,
    },
    {
      title: "No Noise",
      desc: "Skip endless searching. GoGlobal filters the clutter and surfaces only high-quality opportunities.",
      icon: Sparkles,
    },
    {
      title: "Smarter Discovery",
      desc: "Search and explore opportunities tailored to your interests, goals and preferred regions.",
      icon: Search,
    },
    {
      title: "Trusted Platform",
      desc: "Built for ambitious students seeking genuine international growth opportunities.",
      icon: ShieldCheck,
    },
  ]
  
  export default function WhyGoGlobal() {
    return (
      <section className="bg-black px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Why GoGlobal
          </p>
  
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
  
            Built for ambitious students
            <span className="block text-zinc-500">
              searching beyond borders.
            </span>
  
          </h2>
  
        </div>
  
        {/* GRID */}
  
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
  
          {features.map((item) => {
            const Icon = item.icon
  
            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-2xl sm:p-7"
              >
  
                {/* ICON */}
  
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 sm:h-14 sm:w-14">
  
                  <Icon className="h-6 w-6 text-white" />
  
                </div>
  
                {/* CONTENT */}
  
                <h3 className="mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl">
  
                  {item.title}
  
                </h3>
  
                <p className="mt-4 max-w-lg text-[15px] leading-7 text-zinc-400 sm:mt-5 sm:text-[16px]">
  
                  {item.desc}
  
                </p>
  
              </div>
            )
          })}
  
        </div>
  
      </section>
    )
  }
