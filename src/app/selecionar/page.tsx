"use client"

import Selected from "@/components/Selected"
import { useApp } from "@/contexts/contextApi"
import React from "react"

const Page: React.FC = () => {
  const { rotas,setSelectedRoute } = useApp()
  
  if(!window) return null
  
  const pageQuery = new URLSearchParams(window.location.search)
  const id = Number(pageQuery.get("id"))

  React.useEffect(() => {
    const route = rotas.find((rota) => rota.id === id)
    setSelectedRoute(route || null)
  }, [rotas,id])

  return <Selected />
}

export default Page
