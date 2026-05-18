const stats = [
    {
      number: "12K+",
      label: "Students Exploring",
    },
    {
      number: "4K+",
      label: "Global Opportunities",
    },
    {
      number: "80+",
      label: "Countries Reached",
    },
    {
      number: "300+",
      label: "Partner Organizations",
    },
  ]
  
  export default function GlobalStats() {
    return (
      <section className="bg-black px-10 py-20 text-white">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Global Impact
          </p>
  
          <h2 className="mt-4 text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
  
            Building a global ecosystem
            <span className="block text-zinc-500">
              for ambitious students everywhere.
            </span>
  
          </h2>
  
        </div>
  
        {/* STATS */}
  
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
            >
  
              <h3 className="text-5xl font-bold tracking-tight text-white">
  
                {item.number}
  
              </h3>
  
              <p className="mt-4 text-base text-zinc-400">
  
                {item.label}
  
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }