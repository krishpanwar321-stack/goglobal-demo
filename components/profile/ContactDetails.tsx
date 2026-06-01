import Input from "@/components/ui/Input"

interface ContactDetailsProps {
  phone: string
  setPhone: (
    value: string
  ) => void

  whatsapp: string
  setWhatsapp: (
    value: string
  ) => void

  email: string

  alternateEmail: string
  setAlternateEmail: (
    value: string
  ) => void

  handleSaveProfile: () => void
}

export default function ContactDetails({
  phone,
  setPhone,
  whatsapp,
  setWhatsapp,
  email,
  alternateEmail,
  setAlternateEmail,
  handleSaveProfile,
}: ContactDetailsProps) {

  return (

    <div>

      <div>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B7355]">

          Contact Details

        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2B1D16]">

          Stay reachable globally.

        </h2>

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div>

        <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
            Phone Number
          </label>

          <Input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

        </div>

        <div>

        <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
            WhatsApp Number
          </label>

          <Input
            value={whatsapp}
            onChange={(e) =>
              setWhatsapp(e.target.value)
            }
          />

        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div>

        <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
            Primary Email
          </label>

          <Input
            value={email}
            disabled
          />

        </div>

        <div>

        <label className="mb-3 block text-sm font-medium text-[#2B1D16]">
            Alternate Email
          </label>

          <Input
            value={alternateEmail}
            onChange={(e) =>
              setAlternateEmail(
                e.target.value
              )
            }
          />

        </div>

      </div>

      <button
        onClick={handleSaveProfile}
        className="mt-10 rounded-2xl bg-[#2563EB] px-8 py-4 font-medium text-white transition hover:bg-[#1D4ED8]"
      >

        Save Contact Details

      </button>

    </div>

  )

}