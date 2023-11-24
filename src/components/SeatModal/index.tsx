"use client"
import { useApp } from "@/contexts/contextApi"
import React from "react"

const SeatModal: React.FC = () => {
  const { selectedRoute, setSelectedRoute } = useApp()

  if(!selectedRoute) return null

  return (
    // overlay
    <div
      className="w-screen h-screen bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center z-50"
    >
      {/* modal */}
      <div
        className="bg-white w-[90%] h-[90%] rounded-xl flex flex-col justify-center items-center"
      >
      
      
      
      
      </div>
    </div>
  )
}

export default SeatModal
