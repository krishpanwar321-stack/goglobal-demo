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
      <section className="px-10 py-28">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            How It Works
          </p>
  
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-black">
  
            A simpler way
            <span className="block text-zinc-400">
              to discover global opportunities.
            </span>
  
          </h2>
  
        </div>
  
        {/* STEPS */}
  
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
  
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[32px] border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-black"
            >
  
              {/* NUMBER */}
  
              <div className="text-6xl font-bold tracking-tight text-zinc-200">
  
                {step.number}
  
              </div>
  
              {/* CONTENT */}
  
              <h3 className="mt-10 text-3xl font-semibold text-black">
  
                {step.title}
  
              </h3>
  
              <p className="mt-5 text-[16px] leading-8 text-zinc-600">
  
                {step.desc}
  
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }