interface HeroProps {
  fullName: string
  isLoggedIn: boolean
}

export default function Hero({
  fullName,
  isLoggedIn,
}: HeroProps) {
    return (
      <section className="grid min-h-[78vh] gap-14 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-16 lg:py-16">
  
        {/* LEFT */}
  
        <div className="flex flex-col justify-center">
  
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            Your global journey starts here
          </p>
  
          <h1 className="mt-8 max-w-[650px] text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold leading-[0.98] tracking-tight">

  {isLoggedIn ? (
    <>

      Welcome back,

      <span className="mt-4 block text-zinc-400">

        {fullName || "Explorer"}.

      </span>

    </>
  ) : (
    <>

      Discover global opportunities

      <span className="mt-4 block text-zinc-400">

        without the noise.

      </span>

    </>
  )}

</h1>
  
          <p className="mt-10 max-w-2xl text-base leading-8 sm:text-lg lg:text-xl lg:leading-9 text-zinc-600">
  
            Internships, fellowships, scholarships,
            conferences, mentorships, apprenticeships
            and more — curated globally for ambitious students.
  
          </p>
  
          {/* BUTTONS */}
  
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:mt-14">
  
            <button className="rounded-2xl bg-black px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800 sm:px-8 sm:text-base">
  
              Explore Opportunities
  
            </button>
  
            <button className="rounded-2xl border border-zinc-300 bg-white px-6 py-4 text-sm font-medium transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-100 sm:px-8 sm:text-base">
  
              Learn More
  
            </button>
  
          </div>
  
          {/* TAGS */}
  
          <div className="mt-14 flex max-w-2xl flex-wrap gap-4">
  
            {[
              "AI",
              "Remote",
              "Internships",
              "Scholarships",
              "Research",
              "Conferences",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
              >
                {item}
              </div>
            ))}
  
          </div>
  
        </div>
  
        {/* RIGHT */}
  
          <div className="relative mt-10 overflow-hidden rounded-[28px] transition-all duration-500 hover:scale-[1.01]">
  
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="students"
            className="h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] w-full object-cover"
          />
  
          {/* OVERLAY */}
  
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
  
          {/* FLOATING CARD */}
  
          <div className="absolute bottom-4 left-4 max-w-[300px] rounded-[24px] border border-white/10 bg-black/40 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:max-w-[360px] sm:p-5">
  
            <p className="text-sm text-white/70">
              Featured Opportunity
            </p>
  
            <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
              MIT Global Research Program
            </h3>
  
            <p className="mt-2 text-white/80">
              Applications closing soon.
            </p>
  
          </div>
  
        </div>
  
      </section>
    )
  }