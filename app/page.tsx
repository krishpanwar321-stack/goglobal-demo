import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"
import FilterBar from "@/components/home/FilterBar"
import Hero from "@/components/home/Hero"
import TrustedLogos from "@/components/home/TrustedLogos"
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities"
import TrendingCategories from "@/components/home/TrendingCategories"
import WhyGoGlobal from "@/components/home/WhyGoGlobal"
import HowItWorks from "@/components/home/HowItWorks"
import Testimonials from "@/components/home/Testimonials"
import GlobalStats from "@/components/home/GlobalStats"
import NewsletterCTA from "@/components/home/NewsletterCTA"
import Footer from "@/components/home/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-black">

      <Sidebar />

      <div className="ml-24">

        <Topbar />

        <FilterBar />

        <Hero />
        <TrustedLogos />
        <FeaturedOpportunities />
        <TrendingCategories />
        <WhyGoGlobal />
        <HowItWorks />
        <Testimonials />
        <GlobalStats />
        <NewsletterCTA />
        <Footer />

      </div>

    </main>
  )
}