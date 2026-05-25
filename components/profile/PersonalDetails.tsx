import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"

interface PersonalDetailsProps {
  fullName: string
  setFullName: (
    value: string
  ) => void

  email: string

  bio: string
  setBio: (
    value: string
  ) => void

  dob: string
  setDob: (
    value: string
  ) => void

  country: string
  setCountry: (
    value: string
  ) => void

  gender: string
  setGender: (
    value: string
  ) => void

  foundUsFrom: string
  setFoundUsFrom: (
    value: string
  ) => void


  handleSaveProfile: () => void
}

export default function PersonalDetails({
  fullName,
  setFullName,
  email,
  bio,
  setBio,
  dob,
  setDob,
  country,
  setCountry,
  gender,
  setGender,
  foundUsFrom,
  setFoundUsFrom,
  handleSaveProfile,
}: PersonalDetailsProps) {

  return (

    <div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">

            Personal Details

          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">

            Your identity and background.

          </h2>

        </div>

      </div>

      {/* GRID */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div>

          <label className="mb-3 block text-sm font-medium">
            Full Name
          </label>

          <Input
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
          />

        </div>

        <div>

          <label className="mb-3 block text-sm font-medium">
            Email
          </label>

          <Input
            value={email}
            disabled
          />

        </div>

      </div>

      {/* DOB + COUNTRY */}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div>

          <label className="mb-3 block text-sm font-medium">
            Date of Birth
          </label>

          <Input
            type="date"
            value={dob}
            onChange={(e) =>
              setDob(e.target.value)
            }
          />

        </div>

        <div>

  <label className="mb-3 block text-sm font-medium">
    Home Country
  </label>

  <select
    value={country}
    onChange={(e) =>
      setCountry(e.target.value)
    }
    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-[15px] font-medium text-zinc-900 outline-none transition focus:border-black"
  >

    <option value="">
      Select your country
    </option>

    <option>Afghanistan</option>
    <option>Argentina</option>
    <option>Australia</option>
    <option>Austria</option>
    <option>Bangladesh</option>
    <option>Belgium</option>
    <option>Brazil</option>
    <option>Canada</option>
    <option>China</option>
    <option>Denmark</option>
    <option>Egypt</option>
    <option>Finland</option>
    <option>France</option>
    <option>Germany</option>
    <option>Greece</option>
    <option>Hong Kong</option>
    <option>India</option>
    <option>Indonesia</option>
    <option>Ireland</option>
    <option>Israel</option>
    <option>Italy</option>
    <option>Japan</option>
    <option>Kenya</option>
    <option>Malaysia</option>
    <option>Mexico</option>
    <option>Netherlands</option>
    <option>New Zealand</option>
    <option>Nigeria</option>
    <option>Norway</option>
    <option>Pakistan</option>
    <option>Philippines</option>
    <option>Poland</option>
    <option>Portugal</option>
    <option>Qatar</option>
    <option>Russia</option>
    <option>Saudi Arabia</option>
    <option>Singapore</option>
    <option>South Africa</option>
    <option>South Korea</option>
    <option>Spain</option>
    <option>Sri Lanka</option>
    <option>Sweden</option>
    <option>Switzerland</option>
    <option>Taiwan</option>
    <option>Thailand</option>
    <option>Turkey</option>
    <option>Ukraine</option>
    <option>United Arab Emirates</option>
    <option>United Kingdom</option>
    <option>United States</option>
    <option>Vietnam</option>

  </select>

</div>

      </div>

      {/* GENDER + SOURCE */}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div>

          <label className="mb-3 block text-sm font-medium">
            Gender
          </label>

          <select
            value={gender}
            onChange={(e) =>
              setGender(e.target.value)
            }
            className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 outline-none"
          >

            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>

        <div>

          <label className="mb-3 block text-sm font-medium">
            Where did you find us?
          </label>

          <select
            value={foundUsFrom}
            onChange={(e) =>
              setFoundUsFrom(
                e.target.value
              )
            }
            className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 outline-none"
          >

            <option value="">
              Select Option
            </option>

            <option value="Instagram">
              Instagram
            </option>

            <option value="LinkedIn">
              LinkedIn
            </option>

            <option value="Friend">
              Friend
            </option>

            <option value="Google">
              Google
            </option>

          </select>

        </div>

      </div>



      {/* BIO */}

      <div className="mt-8">

        <label className="mb-3 block text-sm font-medium">
          Bio
        </label>

        <Textarea
          rows={6}
          value={bio}
          onChange={(e) =>
            setBio(e.target.value)
          }
        />

      </div>

      {/* SAVE */}

      <button
        onClick={handleSaveProfile}
        className="mt-10 rounded-2xl bg-black px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:opacity-90"
      >

        Save Personal Details

      </button>

    </div>

  )

}