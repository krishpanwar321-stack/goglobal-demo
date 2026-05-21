"use client"

import Input from "@/components/ui/Input"

interface Education {
  id: string
  institution: string
  degree: string
  stream: string
  startYear: string
  endYear: string
  collegeEmail: string
}

interface EducationSectionProps {
  education: Education[]

  setEducation: (
    value: Education[]
  ) => void

  isDropper: boolean

  setIsDropper: (
    value: boolean
  ) => void

  handleSaveProfile: () => void
}

export default function EducationSection({
  education,
  setEducation,
  isDropper,
  setIsDropper,
  handleSaveProfile,
}: EducationSectionProps) {

  const addEducation = () => {

    setEducation([
      ...education,
      {
        id: crypto.randomUUID(),

        institution: "",

        degree: "",

        stream: "",

        startYear: "",

        endYear: "",

        collegeEmail: "",
      },
    ])

  }

  const removeEducation = (
    id: string
  ) => {

    setEducation(
      education.filter(
        (item) => item.id !== id
      )
    )

  }

  const updateEducation = (
    id: string,
    field: string,
    value: string
  ) => {

    setEducation(

      education.map((item) =>

        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item

      )

    )

  }

  return (

    <div>

      {/* HEADER */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">

            Education

          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">

            Your educational journey.

          </h2>

        </div>

        <button
          onClick={addEducation}
          className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >

          + Add Education

        </button>

      </div>

      {/* DROPPER */}

      <div className="mt-10 flex items-center justify-between rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-5">

        <div>

          <h3 className="font-semibold text-black">

            Are you a dropper?

          </h3>

          <p className="mt-1 text-sm text-zinc-500">

            This helps personalize opportunities.

          </p>

        </div>

        <button
          onClick={() =>
            setIsDropper(!isDropper)
          }
          className={`h-8 w-16 rounded-full transition-all duration-300 ${
            isDropper
              ? "bg-black"
              : "bg-zinc-300"
          }`}
        >

          <div
            className={`h-8 w-8 rounded-full bg-white transition-all duration-300 ${
              isDropper
                ? "translate-x-8"
                : "translate-x-0"
            }`}
          />

        </button>

      </div>

      {/* EMPTY */}

      {education.length === 0 && (

        <div className="mt-10 rounded-3xl border border-dashed border-zinc-300 p-10 text-center">

          <p className="text-zinc-500">

            No education added yet.

          </p>

        </div>

      )}

      {/* EDUCATION CARDS */}

      <div className="mt-10 flex flex-col gap-8">

        {education.map((item) => (

          <div
            key={item.id}
            className="rounded-[32px] border border-zinc-200 bg-zinc-50 p-6"
          >

            {/* TOP */}

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold text-black">

                Education Entry

              </h3>

              <button
                onClick={() =>
                  removeEducation(item.id)
                }
                className="text-sm font-medium text-red-500"
              >

                Remove

              </button>

            </div>

            {/* GRID */}

            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-medium">

                  School / College

                </label>

                <Input
                  value={item.institution}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "institution",
                      e.target.value
                    )
                  }
                />

              </div>

              <div>

                <label className="mb-3 block text-sm font-medium">

                  Degree

                </label>

                <Input
                  value={item.degree}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "degree",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

            {/* SECOND GRID */}

            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-medium">

                  Stream

                </label>

                <Input
                  value={item.stream}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "stream",
                      e.target.value
                    )
                  }
                />

              </div>

              <div>

                <label className="mb-3 block text-sm font-medium">

                  College Email

                </label>

                <Input
                  value={item.collegeEmail}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "collegeEmail",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

            {/* YEARS */}

            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-medium">

                  Start Year

                </label>

                <Input
                  value={item.startYear}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "startYear",
                      e.target.value
                    )
                  }
                />

              </div>

              <div>

                <label className="mb-3 block text-sm font-medium">

                  End Year

                </label>

                <Input
                  value={item.endYear}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "endYear",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* SAVE */}

      <button
        onClick={handleSaveProfile}
        className="mt-10 rounded-2xl bg-black px-8 py-4 font-medium text-white transition hover:opacity-90"
      >

        Save Education

      </button>

    </div>

  )

}