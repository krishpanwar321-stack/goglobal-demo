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
      <section className="bg-black px-10 py-20 text-white">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Why GoGlobal
          </p>
  
          <h2 className="mt-4 text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
  
            Built for ambitious students
            <span className="block text-zinc-500">
              searching beyond borders.
            </span>
  
          </h2>
  
        </div>
  
        {/* GRID */}
  
        <div className="mt-14 grid gap-6 md:grid-cols-2">
  
          {features.map((item) => {
            const Icon = item.icon
  
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
  
                {/* ICON */}
  
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
  
                  <Icon className="h-6 w-6 text-white" />
  
                </div>
  
                {/* CONTENT */}
  
                <h3 className="mt-6 text-2xl font-semibold">
  
                  {item.title}
  
                </h3>
  
                <p className="mt-5 max-w-lg text-[16px] leading-7 text-zinc-400">
  
                  {item.desc}
  
                </p>
  
              </div>
            )
          })}
  
        </div>
  
      </section>
    )
  }
