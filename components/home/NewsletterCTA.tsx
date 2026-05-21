export default function NewsletterCTA() {
    return (
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
  
  <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-zinc-100 to-zinc-200/70 px-6 py-10 sm:px-8 sm:py-14 lg:rounded-[36px] lg:px-20 lg:py-16">
  
          {/* CONTENT */}
  
          <div className="max-w-4xl">
  
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
              Stay Updated
            </p>
  
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl xl:text-5xl">
  
              Never miss a global
              <span className="block text-zinc-400">
                opportunity again.
              </span>
  
            </h2>
  
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">
  
              Get curated internships, fellowships, scholarships,
              conferences and opportunities delivered directly to your inbox.
  
            </p>
  
          </div>
  
          {/* FORM */}
  
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 md:flex-row">
  
            <input
              type="email"
              placeholder="Enter your email"
              className="h-13 flex-1 rounded-2xl bg-white px-5 shadow-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black sm:h-14"
            />
  
            <button className="h-13 rounded-2xl bg-black px-8 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800 sm:h-14 sm:px-10">
  
              Subscribe
  
            </button>
  
          </div>
  
        </div>
  
      </section>
    )
  }