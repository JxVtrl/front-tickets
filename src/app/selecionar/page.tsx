"use client"

import Selected from "@/components/Selected"
import { useApp } from "@/contexts/contextApi"
import { usePathname } from "next/navigation"
import React from "react"

const Page: React.FC = () => {
  const { rotas,setSelectedRoute } = useApp()
  
  const pathname = usePathname()
  
  const pageQuery = new URLSearchParams(pathname)
  const id = Number(pageQuery.get("id"))

  React.useEffect(() => {
    const route = rotas.find((rota) => rota.id === id)
    setSelectedRoute(route || null)
  }, [rotas,id])

  return <Selected />
}

export default Page
