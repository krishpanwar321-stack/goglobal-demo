"use client"

import Textarea from "@/components/ui/Textarea"

interface OrganizationProfileProps {
  organizationDescription: string
  setOrganizationDescription: (
    value: string
  ) => void

  missionStatement: string
  setMissionStatement: (
    value: string
  ) => void

  whyJoin: string
  setWhyJoin: (
    value: string
  ) => void

  handleSaveProfile: () => void
}

export default function OrganizationProfile({
  organizationDescription,
  setOrganizationDescription,
  missionStatement,
  setMissionStatement,
  whyJoin,
  setWhyJoin,
  handleSaveProfile,
}: OrganizationProfileProps) {

  return (

    <div>

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B7355]">
        Organization Profile
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2B1D16]">
        Showcase your organization.
      </h2>

      <div className="mt-10">

        <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
          Organization Description
        </label>

        <Textarea
          rows={6}
          value={organizationDescription}
          onChange={(e) =>
            setOrganizationDescription(
              e.target.value
            )
          }
        />

      </div>

      <div className="mt-8">

        <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
          Mission Statement
        </label>

        <Textarea
          rows={4}
          value={missionStatement}
          onChange={(e) =>
            setMissionStatement(
              e.target.value
            )
          }
        />

      </div>

      <div className="mt-8">

        <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
          Why Students Should Join
        </label>

        <Textarea
          rows={5}
          value={whyJoin}
          onChange={(e) =>
            setWhyJoin(
              e.target.value
            )
          }
        />

      </div>

      <button
        onClick={handleSaveProfile}
        className="mt-10 rounded-2xl bg-[#2563EB] px-8 py-4 font-medium text-white transition hover:bg-[#1D4ED8]"
      >

        Save Organization Profile

      </button>

    </div>

  )

}