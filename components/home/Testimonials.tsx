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
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
  
        {/* HEADER */}
  
        <div className="max-w-3xl">
  
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#64748B]">
            Testimonials
          </p>
  
          <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl xl:text-5xl">
  
            Students discovering
            <span className="mt-1 block text-[#3B82F6]">
              opportunities beyond borders.
            </span>
  
          </h2>
  
        </div>
  
        {/* GRID */}
  
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
  
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`group rounded-[28px] border border-[#E2E8F0] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/20 hover:shadow-blue-100 hover:shadow-2xl sm:p-7 ${
                index === 1
                  ? "bg-[#EFF6FF] text-[#0F172A]"
                  : "bg-white text-[#0F172A]"
              }`} 
            >
  
              {/* QUOTE */}
  
              <p
  className="text-[15px] leading-7 text-[#475569] sm:text-[17px] sm:leading-8"
>

  “{item.quote}”

</p>
  
              {/* USER */}
  
              <div className="mt-8 flex items-center gap-4 sm:mt-10">
  
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-base font-semibold text-[#2563EB] sm:h-12 sm:w-12 sm:text-lg">
  
                  {item.name.charAt(0)}
  
                </div>
  
                <div>
  
                <h3
  className="font-semibold text-[#0F172A]"
 > 
  
                    {item.name}
  
                  </h3>
  
                  <p className="text-sm text-[#64748B]">
  
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