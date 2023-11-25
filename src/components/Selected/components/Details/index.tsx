import React from "react"
import { useApp } from "@/contexts/contextApi"
import TravelTime from "./component/TravelTime"
import { travelTime } from "@/utils/functions"

const Details: React.FC = () => {
  const { selectedRoute } = useApp()

  if (!selectedRoute) return null
  
    
    return (
      <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-md w-full max-w-3xl mb-4 gap-4 mx-auto">
        <div>
          <div>
            <TravelTime />
            
            <span>
              Previsão de <b>{travelTime(
                selectedRoute?.hora_ida,
                selectedRoute?.hora_chegada
              )}</b> de viagem
            </span>
            
          </div>
        </div>
        <div></div>
      </div>
    )
 
}

export default Details
