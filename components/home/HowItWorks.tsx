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
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            How It Works
          </p>
  
          <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl xl:text-5xl">
  
            A simpler way
            <span className="mt-1 block text-zinc-400">
              to discover global opportunities.
            </span>
  
          </h2>
  
        </div>
  
        {/* STEPS */}
  
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
  
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[28px] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7"
            >
  
              {/* NUMBER */}
  
              <div className="text-4xl font-bold tracking-tight text-zinc-200 transition-all duration-300 group-hover:text-zinc-300 sm:text-5xl">
  
                {step.number}
  
              </div>
  
              {/* CONTENT */}
  
              <h3 className="mt-6 text-xl font-semibold text-black sm:mt-8 sm:text-2xl">
  
                {step.title}
  
              </h3>
  
              <p className="mt-4 text-[15px] leading-7 text-zinc-600 sm:mt-5 sm:text-[16px]">
  
                {step.desc}
  
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }