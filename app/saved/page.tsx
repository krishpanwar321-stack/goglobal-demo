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
} from "firebase/auth"

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"

import {
  auth,
  db,
} from "@/lib/firebase"

import Sidebar from "@/components/home/Sidebar"

import OpportunityCard from "@/components/opportunity/OpportunityCard"

export default function SavedPage() {

  const router = useRouter()

  const [savedOpportunities, setSavedOpportunities] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {

          if (!user) {

            router.push("/login")

            return

          }

          const savedQuery = query(
            collection(db, "savedOpportunities"),
            where("userId", "==", user.uid)
          )

          const savedSnapshot =
            await getDocs(savedQuery)

          const savedItems =
            await Promise.all(

              savedSnapshot.docs.map(
                async (savedDoc) => {

                  const savedData =
                    savedDoc.data()

                  const opportunityRef =
                    doc(
                      db,
                      "opportunities",
                      savedData.opportunityId
                    )

                  const opportunitySnapshot =
                    await getDoc(opportunityRef)

                  if (
                    opportunitySnapshot.exists()
                  ) {

                    return {
                      id: opportunitySnapshot.id,
                      ...opportunitySnapshot.data(),
                    }

                  }

                  return null

                }
              )

            )

          setSavedOpportunities(
            savedItems.filter(Boolean)
          )

          setLoading(false)

        }
      )

    return () => unsubscribe()

  }, [router])

  if (loading) {

    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50">

        <p className="text-zinc-500">
          Loading saved opportunities...
        </p>

      </main>
    )

  }

  return (
    <>
      <Sidebar />

      <main className="ml-24 min-h-screen bg-zinc-50 text-black">

        <section className="border-b border-zinc-200 bg-white px-10 py-12">

          <p className="text-sm text-zinc-500">
            Saved Opportunities
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">

            Your saved opportunities.

          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">

            Track opportunities you want to revisit later.

          </p>

        </section>

        <section className="px-10 py-10">

          {savedOpportunities.length === 0 ? (

            <div className="rounded-[32px] border border-zinc-200 bg-white p-10">

              <h2 className="text-3xl font-bold text-black">

                Nothing saved yet.

              </h2>

              <p className="mt-4 max-w-xl leading-8 text-zinc-600">

                Opportunities you bookmark will appear here.

              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

              {savedOpportunities.map(
                (opportunity) => (

                  <OpportunityCard
                    key={opportunity.id}
                    id={opportunity.id}
                    organization={opportunity.organization}
                    title={opportunity.title}
                    description={opportunity.description}
                    type={opportunity.type}
                    location={opportunity.location}
                    mode={opportunity.mode}
                    deadline={opportunity.deadline}
                  />

                )
              )}

            </div>

          )}

        </section>

      </main>
    </>
  )

}