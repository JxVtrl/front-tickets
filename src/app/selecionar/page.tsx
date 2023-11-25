"use client"

import Selected from "@/components/Selected"
import { useApp } from "@/contexts/contextApi"
import { useRouter } from "next/router"
import React from "react"

const Page: React.FC = () => {
  const { rotas,setSelectedRoute } = useApp()
  
  const router = useRouter()
  
  const pathName = router.pathname
  
  const pageQuery = new URLSearchParams(pathName)
  const id = Number(pageQuery.get("id"))

  React.useEffect(() => {
    const route = rotas.find((rota) => rota.id === id)
    setSelectedRoute(route || null)
  }, [rotas,id])

  return <Selected />
}

export default Page
