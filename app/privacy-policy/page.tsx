"use client"

import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-black">

      <Sidebar />

      <div className="lg:ml-24">

        <Topbar />

        <section className="px-5 py-10 sm:px-8 lg:px-12">

  <div className="mx-auto max-w-5xl rounded-[32px] border border-[#E7DDD1] bg-[#FFFDF9] p-8 shadow-sm sm:p-12">

    <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8B7355]">
      Legal
    </p>

    <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#2B1D16] sm:text-5xl">
      Privacy Policy
    </h1>

    <p className="mt-4 text-[#6B5B52]">
      Last updated: June 2026
    </p>

    <div className="mt-10 space-y-10 text-[#6B5B52]">

      {/* Section 1 */}

      <div>
        <h2 className="text-2xl font-semibold text-[#2B1D16]">
          1. Introduction
        </h2>

        <p className="mt-4 leading-8">
          GoGlobal is committed to protecting your privacy and personal
          information. This Privacy Policy explains how we collect,
          use, store and protect information when you use our platform.
        </p>
      </div>

      {/* Section 2 */}

      <div>
        <h2 className="text-2xl font-semibold text-[#2B1D16]">
          2. Information We Collect
        </h2>

        <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
          <li>Full name</li>
          <li>Email address</li>
          <li>Country and profile information</li>
          <li>Saved opportunities and activity data</li>
          <li>Device and browser information</li>
        </ul>
      </div>

      {/* Section 3 */}

      <div>
        <h2 className="text-2xl font-semibold text-[#2B1D16]">
          3. How We Use Information
        </h2>

        <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
          <li>Provide personalized opportunities</li>
          <li>Improve platform performance</li>
          <li>Communicate important updates</li>
          <li>Maintain account security</li>
          <li>Provide customer support</li>
        </ul>
      </div>

      {/* Section 4 */}

      <div>
        <h2 className="text-2xl font-semibold text-[#2B1D16]">
          4. Data Storage & Security
        </h2>

        <p className="mt-4 leading-8">
          We use secure infrastructure and industry-standard security
          practices to protect user information. While no online
          service can guarantee absolute security, we continuously
          work to safeguard user data.
        </p>
      </div>

      {/* Section 5 */}

      <div>
        <h2 className="text-2xl font-semibold text-[#2B1D16]">
          5. Third-Party Services
        </h2>

        <p className="mt-4 leading-8">
          GoGlobal may use trusted third-party services such as
          authentication providers, analytics services and cloud
          infrastructure providers to operate the platform.
        </p>
      </div>

      {/* Section 6 */}

      <div>
        <h2 className="text-2xl font-semibold text-[#2B1D16]">
          6. Your Rights
        </h2>

        <p className="mt-4 leading-8">
          You may request access, correction or deletion of your
          personal information. You may also contact us regarding
          questions about your privacy and data usage.
        </p>
      </div>

      {/* Section 7 */}

      <div>
        <h2 className="text-2xl font-semibold text-[#2B1D16]">
          7. Contact
        </h2>

        <p className="mt-4 leading-8">
          For privacy-related questions, please contact the GoGlobal
          team through the Contact page.
        </p>
      </div>

    </div>

  </div>

</section>

      </div>

    </main>
  )
}