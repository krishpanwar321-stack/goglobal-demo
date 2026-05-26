const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Computer Science Student",
      quote:
        "GoGlobal helped me discover research programs and internships I would have never found on my own.",
    },
    {
      name: "Sophia Chen",
      role: "AI Research Enthusiast",
      quote:
        "The platform feels clean, curated and actually useful compared to endlessly scrolling random websites.",
    },
    {
      name: "Daniel Kim",
      role: "Undergraduate Researcher",
      quote:
        "I found an international fellowship through GoGlobal within my first week of using it.",
    },
  ]
  
  export default function Testimonials() {
    return (
      <section className="border-t border-zinc-200 bg-zinc-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Testimonials
          </p>
  
          <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl xl:text-5xl">
  
            Students discovering
            <span className="mt-1 block text-zinc-400">
              opportunities beyond borders.
            </span>
  
          </h2>
  
        </div>
  
        {/* GRID */}
  
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
  
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`group rounded-[28px] border border-zinc-200/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 ${
                index === 1
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`} 
            >
  
              {/* QUOTE */}
  
              <p
  className={`text-[15px] leading-7 sm:text-[17px] sm:leading-8 ${
    index === 1 ? "text-zinc-300" : "text-zinc-700"
  }`}
>

  “{item.quote}”

</p>
  
              {/* USER */}
  
              <div className="mt-8 flex items-center gap-4 sm:mt-10">
  
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-base font-semibold text-black sm:h-12 sm:w-12 sm:text-lg">
  
                  {item.name.charAt(0)}
  
                </div>
  
                <div>
  
                <h3
  className={`font-semibold ${
    index === 1 ? "text-white" : "text-black"
  }`}
 > 
  
                    {item.name}
  
                  </h3>
  
                  <p className={`text-sm ${
  index === 1 ? "text-zinc-400" : "text-zinc-500"
}`}>
  
                    {item.role}
  
                  </p>
  
                </div>
  
              </div>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }