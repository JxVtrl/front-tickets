import React from "react"

import ArrowRight from "@/assets/icons/ArrowRight"
import ClockIcon from "@/assets/icons/ClockIcon"
import { useApp } from "@/contexts/contextApi"
import { format_hour } from "@/utils/functions"

const TravelTime: React.FC = () => {
  const { selectedRoute } = useApp()

  if (!selectedRoute) return null

  return (
    <div className="flex justify-between items-center bg-white rounded-2xl px-4 py-2 shadow-md w-fit mb-4 gap-4 ">
      <div className="flex items-center gap-2">
        <ClockIcon />
        <div>
          <span>Partida {format_hour(selectedRoute?.hora_ida)}</span>
        </div>
      </div>
      <ArrowRight />
      <div className="flex items-center gap-4">
        <ClockIcon />
        <div>
          <span>Chegada {format_hour(selectedRoute?.hora_chegada)}</span>
        </div>
      </div>
    </div>
  )
}

export default TravelTime