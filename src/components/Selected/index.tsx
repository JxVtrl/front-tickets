import React from "react"
import { DateScroll, Progress, Header, Details } from "./components"
import SelectedMap from "./components/SelectedMap"
const Selected: React.FC = () => {
  return (
    <>
      <Header />
      <Progress />
      <DateScroll />
      <Details />
      <SelectedMap/>
    </>
  )
}

export default Selected
