export default function NewsletterCTA() {
    return (
      <section className="px-10 py-20">
  
        <div className="overflow-hidden rounded-[36px] bg-zinc-100 px-10 py-16 lg:px-20">
  
          {/* CONTENT */}
  
          <div className="max-w-4xl">
  
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
              Stay Updated
            </p>
  
            <h2 className="mt-5 text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-black">
  
              Never miss a global
              <span className="block text-zinc-400">
                opportunity again.
              </span>
  
            </h2>
  
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
  
              Get curated internships, fellowships, scholarships,
              conferences and opportunities delivered directly to your inbox.
  
            </p>
  
          </div>
  
          {/* FORM */}
  
          <div className="mt-10 flex flex-col gap-4 md:flex-row">
  
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-2xl bg-white px-5 shadow-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black"
            />
  
            <button className="h-14 rounded-2xl bg-black px-10 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800">
  
              Subscribe
  
            </button>
  
          </div>
  
        </div>
  
      </section>
    )
  }