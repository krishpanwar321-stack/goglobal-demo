"use client"

import Link from "next/link"
import { Globe2 } from "lucide-react"
import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F8F5F0] text-black">
      
          <Sidebar />
      
          <div className="lg:ml-24">
      
            <Topbar />
      
            <section className="px-5 py-10 sm:px-8 lg:px-12">

  <div className="mx-auto max-w-6xl">

    {/* HERO */}

    <div className="rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm sm:p-12">

      <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8B7355]">
        About GoGlobal
      </p>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#2B1D16] sm:text-6xl">

        Helping students

        <span className="text-[#2563EB]">
          {" "}compete beyond borders.
        </span>

      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-[#6B5B52]">

        GoGlobal is a modern platform designed to help students discover
        internships, scholarships, fellowships, conferences, competitions
        and career opportunities from around the world.

      </p>

    </div>

    {/* MISSION */}

    <div className="mt-8 rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 sm:p-12">

      <h2 className="text-3xl font-bold text-[#2B1D16]">
        Our Mission
      </h2>

      <p className="mt-6 leading-8 text-[#6B5B52]">

        We believe opportunity should not depend on geography,
        privilege or access to information.

        Our mission is to make global opportunities accessible,
        discoverable and actionable for every ambitious student.

      </p>

    </div>

    {/* WHY WE BUILT */}

    <div className="mt-8 grid gap-6 lg:grid-cols-2">

      <div className="rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8">

        <h2 className="text-2xl font-bold text-[#2B1D16]">
          Why We Built GoGlobal
        </h2>

        <p className="mt-5 leading-8 text-[#6B5B52]">

          Students spend countless hours searching through scattered
          websites, social media pages and newsletters just to find
          quality opportunities.

          GoGlobal brings everything together in one place.

        </p>

      </div>

      <div className="rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8">

        <h2 className="text-2xl font-bold text-[#2B1D16]">
          Who It's For
        </h2>

        <p className="mt-5 leading-8 text-[#6B5B52]">

          Students, graduates, researchers, innovators and aspiring
          professionals looking to build international exposure and
          unlock opportunities worldwide.

        </p>

      </div>

    </div>

    {/* VISION */}

    <div className="mt-8 rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 sm:p-12">

      <h2 className="text-3xl font-bold text-[#2B1D16]">
        Our Vision
      </h2>

      <p className="mt-6 leading-8 text-[#6B5B52]">

        We envision a future where every student can access the same
        world-class opportunities regardless of their location.

        GoGlobal aims to become the world's most trusted platform for
        discovering and accessing global opportunities.

      </p>

    </div>

    {/* VALUES */}

    <div className="mt-8 rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 sm:p-12">

      <h2 className="text-3xl font-bold text-[#2B1D16]">
        Our Values
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div>

          <h3 className="font-semibold text-[#2B1D16]">
            Accessibility
          </h3>

          <p className="mt-3 text-[#6B5B52]">
            Opportunities should be accessible to everyone.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-[#2B1D16]">
            Transparency
          </h3>

          <p className="mt-3 text-[#6B5B52]">
            Clear information without unnecessary complexity.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-[#2B1D16]">
            Excellence
          </h3>

          <p className="mt-3 text-[#6B5B52]">
            Curating high-quality opportunities worldwide.
          </p>

        </div>

      </div>

    </div>

    {/* TEAM */}

    <div className="mt-8 rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 sm:p-12">

      <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8B7355]">
        Team
      </p>

      <h2 className="mt-4 text-3xl font-bold text-[#2B1D16]">
        Meet The Team
      </h2>

      <p className="mt-5 text-[#6B5B52] leading-8">
        Team profiles will be added soon as we continue building
        GoGlobal.
      </p>

    </div>

  </div>

</section>
      
          </div>
      
        </main>
      )
 
}