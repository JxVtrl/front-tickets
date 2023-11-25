import React from "react"
import { useApp } from "@/contexts/contextApi"
import TravelTime from "./component/TravelTime"
import RoutePoints from "./component/RoutePoints"
import SelectButtonPrice from "./component/SelectButtonPrice"
import BusInfos from "./component/BusInfos"

const Details: React.FC = () => {
  const { selectedRoute } = useApp()

  if (!selectedRoute) return null

  return (
    <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-md w-full max-w-3xl mb-4 gap-4 mx-auto">
      <div className="flex flex-col justify-between items-start gap-2 h-full ">
        <TravelTime />
        <RoutePoints />
      </div>
      <div className=" flex flex-col justify-between items-center gap-4 ">
        <BusInfos />
        <SelectButtonPrice />
      </div>
    </div>
  )
}

export default Details
