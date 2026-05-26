import Input from "@/components/ui/Input"

interface ResumeSectionProps {
  resume: string
  setResume: (
    value: string
  ) => void

  handleSaveProfile: () => void
}

export default function ResumeSection({
  resume,
  setResume,
  handleSaveProfile,
}: ResumeSectionProps) {

  return (

    <div>

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">

        Resume

      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">

        Showcase your professional profile.

      </h2>

      <div className="mt-10">

        <label className="mb-3 block text-sm font-medium">
          Resume URL
        </label>

        <Input
          placeholder="https://drive.google.com/..."
          value={resume}
          onChange={(e) =>
            setResume(e.target.value)
          }
        />

      </div>

      <button
        onClick={handleSaveProfile}
        className="mt-10 rounded-2xl bg-black px-8 py-4 font-medium text-white"
      >

        Save Resume

      </button>

    </div>

  )

}