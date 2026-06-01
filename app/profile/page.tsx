"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  useRouter,
} from "next/navigation"

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore"

import {
  auth,
  db,
} from "@/lib/firebase"
import SkillsSection from "@/components/profile/SkillsSection"
import Sidebar from "@/components/home/Sidebar"
import ProfileSidebar from "@/components/profile/ProfileSidebar"
import PersonalDetails from "@/components/profile/PersonalDetails"
import ContactDetails from "@/components/profile/ContactDetails"
import SocialProfiles from "@/components/profile/SocialProfiles"
import EducationSection from "@/components/profile/EducationSection"
import CertificatesSection from "@/components/profile/CertificatesSection"
import ExperienceSection from "@/components/profile/ExperienceSection"
import ResumeSection from "@/components/profile/ResumeSection"


export default function ProfilePage() {

  const router = useRouter()

  const [loading, setLoading] =
    useState(true)

  const [fullName, setFullName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [bio, setBio] =
    useState("")

  const [linkedin, setLinkedin] =
    useState("")

  const [portfolio, setPortfolio] =
    useState("")

  const [resume, setResume] =
    useState("")
    const [phone, setPhone] =
  useState("")

const [whatsapp, setWhatsapp] =
  useState("")

const [alternateEmail, setAlternateEmail] =
  useState("")
  const [dob, setDob] =
  useState("")

const [country, setCountry] =
  useState("")

const [gender, setGender] =
  useState("")

const [foundUsFrom, setFoundUsFrom] =
  useState("")


const [instagram, setInstagram] =
  useState("")

  const [youtube, setYoutube] =
  useState("")
  const [education, setEducation] =
  useState<any[]>([])
  const [certificates, setCertificates] =
  useState<any[]>([])
  const [experiences, setExperiences] =
  useState<any[]>([])
  const [skills, setSkills] =
  useState<string[]>([])

const [isDropper, setIsDropper] =
  useState(false)
   
    const [activeSection, setActiveSection] =
  useState("Personal Details")
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {

          if (!user) {

            setLoading(false)
          
            router.push("/login")
          
            return
          
          }

          const userRef = doc(
            db,
            "users",
            user.uid
          )

          const userSnapshot =
            await getDoc(userRef)

          if (userSnapshot.exists()) {

            const userData =
              userSnapshot.data()

            setFullName(
              userData.fullName || ""
            )

            setEmail(
              userData.email || ""
            )

            setBio(
              userData.bio || ""
            )

            setLinkedin(
              userData.linkedin || ""
            )

            setPortfolio(
              userData.portfolio || ""
            )

            setResume(
              userData.resume || ""
            )
            setPhone(
              userData.phone || ""
            )
            
            setWhatsapp(
              userData.whatsapp || ""
            )
            
            setAlternateEmail(
              userData.alternateEmail || ""
            )
            setDob(
              userData.dob || ""
            )
            
            setCountry(
              userData.country || ""
            )
            
            setGender(
              userData.gender || ""
            )
            
            setFoundUsFrom(
              userData.foundUsFrom || ""
            )
            
            setInstagram(
              userData.instagram || ""
            )

            setYoutube(
              userData.youtube || ""
            )

            setEducation(
              userData.education || []
            )
            
            setIsDropper(
              userData.isDropper || false
            )
            setCertificates(
              userData.certificates || []
            )
            setExperiences(
              userData.experiences || []
            )
            setSkills(
              userData.skills || []
            )
          }
          setLoading(false)
        }
      )

    return () => unsubscribe()

  }, [router])
  const handleLogout = async () => {

    try {
  
      await signOut(auth)
  
      router.push("/login")
  
    } catch (error) {
  
      console.error(error)
  
    }
  
  }
  const handleSaveProfile = async () => {

    if (!auth.currentUser) return
    try {

      await updateDoc(
        doc(
          db,
          "users",
          auth.currentUser.uid
        ),
        {
          fullName,
          bio,
          linkedin,
          portfolio,
          resume,
          phone,
          whatsapp,
          alternateEmail,
          dob,
country,
gender,
foundUsFrom,

instagram,
youtube,
education,
isDropper,
certificates,
experiences,
skills,
        }
      )

      alert("Profile updated successfully")

    } catch (error) {

      console.error(error)

    }

  }
  const profileFields = [
    fullName,
    bio,
    portfolio,
    dob,
country,
gender,
phone,
linkedin,
resume,

  ]
  
  const completedFields =
    profileFields.filter(
      (field) =>
        typeof field === "string" &&
        field.trim() !== ""
    ).length
  
  const profileCompletion =
    Math.round(
      (completedFields /
        profileFields.length) * 100
    )

  if (loading) {

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F5F0]">

        <p className="text-[#8B7355]">
          Loading profile...
        </p>

      </main>
    )

  }

  return (
    <>
      <Sidebar />

      <main className="min-h-screen bg-[#F8F5F0] pb-32 text-[#2B1D16] lg:ml-24 lg:pb-0">

      <section className="border-b border-[#E7DDD1] bg-[#FFFDF9] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

          <p className="text-sm uppercase tracking-[0.25em] text-[#8B7355]">
            Student Profile
          </p>

          <h1 className="mt-4 text-[32px] font-bold tracking-tight leading-tight text-[#2B1D16] sm:text-4xl lg:text-5xl">

            Build your global profile.

          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#6B5B52] sm:text-lg sm:leading-8">

            Showcase your experience, skills and ambitions
            to recruiters and global organizations.

          </p>

        </section>

        <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto mb-8 max-w-5xl rounded-[28px] border border-[#E7DDD1] bg-[#FFFDF9] p-5 sm:p-8 lg:rounded-[32px]">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

  <div>

    <p className="text-sm text-[#8B7355]">
      Profile Strength
    </p>

    <h2 className="mt-2 text-2xl font-bold text-[#2B1D16] sm:text-3xl">

      {profileCompletion}% Complete

    </h2>

  </div>

  <div
    className={`rounded-full px-4 py-2 text-sm font-medium ${
      profileCompletion >= 80
        ? "bg-green-100 text-green-700"
        : profileCompletion >= 50
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700"
    }`}
  >

    {profileCompletion >= 80
      ? "Recruiter Ready"
      : profileCompletion >= 50
      ? "Good Progress"
      : "Needs Improvement"}

  </div>

</div>

<div className="mt-6 h-3 overflow-hidden rounded-full bg-[#EFE7DC]">
    

  <div
    className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
    style={{
      width: `${profileCompletion}%`,
    }}
  />

</div>

</div>
<div className="mx-auto mt-8 flex min-w-0 max-w-7xl flex-col gap-6 lg:flex-row">

<ProfileSidebar
  activeSection={activeSection}
  setActiveSection={setActiveSection}
  handleLogout={handleLogout}
  fullName={fullName}
/>

<div className="min-w-0 flex-1 rounded-[28px] border border-[#E7DDD1] bg-[#FFFDF9] p-5 shadow-sm shadow-[#E7DDD1]/40 sm:p-8 lg:rounded-[32px] lg:p-10">
{activeSection ===
  "Personal Details" && (

  <PersonalDetails
    fullName={fullName}
    setFullName={setFullName}
    email={email}
    bio={bio}
    setBio={setBio}
    dob={dob}
    setDob={setDob}
    country={country}
    setCountry={setCountry}
    gender={gender}
    setGender={setGender}
    foundUsFrom={foundUsFrom}
    setFoundUsFrom={setFoundUsFrom}
    
    handleSaveProfile={handleSaveProfile}
  />

)}

{activeSection ===
  "Contact Details" && (

  <ContactDetails
    phone={phone}
    setPhone={setPhone}
    whatsapp={whatsapp}
    setWhatsapp={setWhatsapp}
    email={email}
    alternateEmail={alternateEmail}
    setAlternateEmail={setAlternateEmail}
    handleSaveProfile={handleSaveProfile}
  />

)}

{activeSection ===
  "Social Profiles" && (

  <SocialProfiles
    linkedin={linkedin}
    setLinkedin={setLinkedin}
    portfolio={portfolio}
    setPortfolio={setPortfolio}
    instagram={instagram}
    setInstagram={setInstagram}
    youtube={youtube}
    setYoutube={setYoutube}
    handleSaveProfile={handleSaveProfile}
  />

)}

{activeSection ===
  "Education" && (

<EducationSection
  education={education}
  setEducation={setEducation}
  isDropper={isDropper}
  setIsDropper={setIsDropper}
  handleSaveProfile={handleSaveProfile}
/>

)}

{activeSection ===
  "Certificates" && (

    <CertificatesSection
    certificates={certificates}
    setCertificates={setCertificates}
    handleSaveProfile={handleSaveProfile}
  />

)}

{activeSection ===
  "Skills" && (

  <SkillsSection
    skills={skills}
    setSkills={setSkills}
    handleSaveProfile={handleSaveProfile}
  />

)}

{activeSection ===
  "Experience" && (

    <ExperienceSection
    experiences={experiences}
    setExperiences={setExperiences}
    handleSaveProfile={handleSaveProfile}
  />

)}

{activeSection ===
  "Resume" && (

  <ResumeSection
    resume={resume}
    setResume={setResume}
    handleSaveProfile={handleSaveProfile}
  />

)}


</div>

</div>
        </section>

      </main>
    </>
  )

}
