import Input from "@/components/ui/Input"

interface SocialProfilesProps {
  linkedin: string
  setLinkedin: (
    value: string
  ) => void

  portfolio: string
  setPortfolio: (
    value: string
  ) => void

  instagram: string
  setInstagram: (
    value: string
  ) => void

  telegram: string
  setTelegram: (
    value: string
  ) => void

  handleSaveProfile: () => void
}

export default function SocialProfiles({
  linkedin,
  setLinkedin,
  portfolio,
  setPortfolio,
  instagram,
  setInstagram,
  telegram,
  setTelegram,
  handleSaveProfile,
}: SocialProfilesProps) {

  return (

    <div>

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">

        Social Profiles

      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">

        Build your online presence.

      </h2>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div>

          <label className="mb-3 block text-sm font-medium">
            LinkedIn URL
          </label>

          <Input
            value={linkedin}
            onChange={(e) =>
              setLinkedin(e.target.value)
            }
          />

        </div>

        <div>

          <label className="mb-3 block text-sm font-medium">
            Portfolio URL
          </label>

          <Input
            value={portfolio}
            onChange={(e) =>
              setPortfolio(e.target.value)
            }
          />

        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div>

          <label className="mb-3 block text-sm font-medium">
            Instagram
          </label>

          <Input
            value={instagram}
            onChange={(e) =>
              setInstagram(e.target.value)
            }
          />

        </div>

        <div>

          <label className="mb-3 block text-sm font-medium">
            Telegram ID
          </label>

          <Input
            value={telegram}
            onChange={(e) =>
              setTelegram(e.target.value)
            }
          />

        </div>

      </div>

      <button
        onClick={handleSaveProfile}
        className="mt-10 rounded-2xl bg-black px-8 py-4 font-medium text-white"
      >

        Save Social Profiles

      </button>

    </div>

  )

}