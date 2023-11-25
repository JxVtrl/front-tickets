"use client"

import Selected from "@/components/Selected"
import { useApp } from "@/contexts/contextApi"
import { useSearchParams } from "next/navigation"
import React from "react"

const Page: React.FC = () => {
  const { rotas,setSelectedRoute } = useApp()
  
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  
  React.useEffect(() => {
    const route = rotas.find((rota) => rota.id === Number(id))
    setSelectedRoute(route || null)
  }, [rotas,id])

  return <Selected />
}

export default Page
