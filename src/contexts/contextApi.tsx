"use client"

import {
  criar_rotas,
  orderByYearThenByMonthThenByDayThenHour,
} from "@/utils/functions"
import { Rota } from "@/types"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface ContextProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  rotas: Rota[]
  selectedRoute: Rota | null
  setSelectedRoute: React.Dispatch<React.SetStateAction<Rota | null>>
  selectSeatModal: boolean
  setSelectSeatModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<ContextProps>({} as ContextProps)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [rotas, setRotas] = useState<Rota[]>([])
  const [selectedRoute, setSelectedRoute] = useState<Rota | null>(null)
  const [selectSeatModal, setSelectSeatModal] = useState(false)

  useEffect(() => {
    const rotas_local = localStorage.getItem("rotas")

    let used_routes = JSON.parse(rotas_local || "[]")

    if (!rotas_local) used_routes = criar_rotas()
    localStorage.setItem("rotas", JSON.stringify(used_routes))

    used_routes.sort(orderByYearThenByMonthThenByDayThenHour)

    setRotas(used_routes)

    const user = localStorage.getItem("user")

    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  const value = {
    user,
    setUser,
    rotas,
    selectedRoute,
    setSelectedRoute,
    selectSeatModal,
    setSelectSeatModal,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
