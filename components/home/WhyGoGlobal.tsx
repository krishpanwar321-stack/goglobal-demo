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
      <section className="bg-black px-10 py-28 text-white">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Why GoGlobal
          </p>
  
          <h2 className="mt-4 text-5xl font-bold leading-tight tracking-tight">
  
            Built for ambitious students
            <span className="block text-zinc-500">
              searching beyond borders.
            </span>
  
          </h2>
  
        </div>
  
        {/* GRID */}
  
        <div className="mt-20 grid gap-6 md:grid-cols-2">
  
          {features.map((item) => {
            const Icon = item.icon
  
            return (
              <div
                key={item.title}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
  
                {/* ICON */}
  
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
  
                  <Icon className="h-7 w-7 text-white" />
  
                </div>
  
                {/* CONTENT */}
  
                <h3 className="mt-8 text-3xl font-semibold">
  
                  {item.title}
  
                </h3>
  
                <p className="mt-5 max-w-lg text-[16px] leading-8 text-zinc-400">
  
                  {item.desc}
  
                </p>
  
              </div>
            )
          })}
  
        </div>
  
      </section>
    )
  }