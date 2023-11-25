import { useApp } from "@/contexts/contextApi"
import React from "react"

const SelectButtonPrice: React.FC = () => {
  const { selectedRoute,setSelectSeatModal } = useApp()
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col w-full">
        <span className="text-2xl font-bold ">
          R$ {selectedRoute?.valor},00
        </span>
        <span className="text-sm text-gray-500">Valor por passageiro</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-2 px-4 w-full text-center transition duration-200 ease-in-out" onClick={() => {
        setSelectSeatModal(true)
      }}>
        Selecionar assentos
      </button>
    </div>
  )
}

export default SelectButtonPrice
