"use client"

interface ProfileSidebarProps {
  activeSection: string
  setActiveSection: (
    section: string
  ) => void
}

const sections = [
  "Personal Details",
  "Contact Details",
  "Social Profiles",
  "Education",
  "Certificates",
  "Experience",
  "Resume",
]

export default function ProfileSidebar({
  activeSection,
  setActiveSection,
}: ProfileSidebarProps) {

  return (

    <>

      {/* DESKTOP SIDEBAR */}

      <aside className="hidden lg:flex lg:w-[280px] lg:flex-col lg:rounded-[32px] lg:border lg:border-zinc-200 lg:bg-white lg:p-6 lg:shadow-sm">

        <div>

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">

            U

          </div>

          <h2 className="mt-5 text-2xl font-bold text-black">

            Your Profile

          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">

            Manage your personal details,
            education, experiences and
            professional presence.

          </p>

        </div>

        {/* NAV */}

        <div className="mt-10 flex flex-col gap-2">

          {sections.map((section) => (

            <button
              key={section}
              onClick={() =>
                setActiveSection(section)
              }
              className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                activeSection === section
                  ? "bg-black text-white"
                  : "bg-white text-zinc-700 hover:bg-zinc-100"
              }`}
            >

              {section}

            </button>

          ))}

        </div>

      </aside>

      {/* MOBILE TABS */}

      <div className="sticky top-0 z-20 flex gap-3 overflow-x-auto border-b border-zinc-100 bg-zinc-50 pb-3 pt-1 scrollbar-hide lg:hidden">

        {sections.map((section) => (

          <button
            key={section}
            onClick={() =>
              setActiveSection(section)
            }
            className={`shrink-0 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
              activeSection === section
                ? "bg-black text-white"
                : "bg-white text-zinc-700"
            }`}
          >

            {section}

          </button>

        ))}

      </div>

    </>

  )

}