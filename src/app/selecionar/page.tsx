"use client"

import Selected from "@/components/Selected"
import { useApp } from "@/contexts/contextApi"
import { Rota } from "@/types"
import React from "react"

type Props = {
  id: string | number
}

const Page: React.FC<Props> = ({ id }) => {
  const [route, setRoute] = React.useState<Rota | null>(null)
  const { rotas } = useApp()

  React.useEffect(() => {
    const route = rotas.find((rota) => rota.id == id)
    setRoute(route || null)
  }, [id, rotas])

  if (!route) return <div />

  return (
    <div>
      <Selected />
    </div>
  )
}

export default Page
