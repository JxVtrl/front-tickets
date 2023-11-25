"use client"
import CalendarIcon from "@/assets/icons/CalendarIcon"
import { useApp } from "@/contexts/contextApi"
import React from "react"

const DateShow: React.FC = () => {
  const { selectedRoute } = useApp()

  const getDate = () => {
    if (selectedRoute) {
      const date = new Date(selectedRoute.data_ida).toLocaleDateString()

      return date
    }

    return ""
  }

  return (
    <div className="flex items-center gap-[4px]">
      <CalendarIcon />
      <span className="text-[#A0A0A0] text-sm mx-[4px]">
        {getDate()} - {selectedRoute?.hora_ida}
      </span>
    </div>
  )
}

export default DateShow
