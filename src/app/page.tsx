import React from "react"
import Banner from "@/components/Banner"
import Planner from "@/components/Planner"
import TripList from "@/components/TripList"

export default function Home() {
  return (
    <section>
      <Banner />
      <Planner />
      <TripList />
    </section>
  )
}
