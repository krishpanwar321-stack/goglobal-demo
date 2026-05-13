const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "Explore internships, fellowships, scholarships, conferences and more from around the world.",
    },
    {
      number: "02",
      title: "Save",
      desc: "Bookmark opportunities, build your personalized space and track what matters most.",
    },
    {
      number: "03",
      title: "Apply",
      desc: "Apply directly through official sources and continue discovering new opportunities daily.",
    },
  ]
  
  export default function HowItWorks() {
    return (
      <section className="px-10 py-20">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            How It Works
          </p>
  
          <h2 className="mt-4 text-4xl xl:text-5xl font-bold leading-[1.08] tracking-tight">
  
            A simpler way
            <span className="mt-1 block text-zinc-400">
              to discover global opportunities.
            </span>
  
          </h2>
  
        </div>
  
        {/* STEPS */}
  
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
  
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
  
              {/* NUMBER */}
  
              <div className="text-5xl font-bold tracking-tight text-zinc-200">
  
                {step.number}
  
              </div>
  
              {/* CONTENT */}
  
              <h3 className="mt-8 text-2xl font-semibold text-black">
  
                {step.title}
  
              </h3>
  
              <p className="mt-5 text-[16px] leading-7 text-zinc-600">
  
                {step.desc}
  
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }