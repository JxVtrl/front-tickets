import React from "react"
import { useApp } from "@/contexts/contextApi"
import TravelTime from "./component/TravelTime"
import RoutePoints from "./component/RoutePoints"

const Details: React.FC = () => {
  const { selectedRoute } = useApp()

  if (!selectedRoute) return null

  return (
    <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-md w-full max-w-3xl mb-4 gap-4 mx-auto">
      <div
        className="
        flex flex-col
        justify-between
        items-start
        gap-2
        h-full
"
      >
        <div
          className="
          flex flex-col
          justify-between
          items-center
"
        >
          <TravelTime />
        </div>
        <RoutePoints />
      </div>
      <div>
        <div
          className="
          flex
          flex-col
          justify-between
          items-start
          gap-2
          h-full
"
        >
          <h1 className="
          text-2xl
          font-bold
  
">Ônibus semi-leito</h1>
          <span>Poltronas reclináveis</span>
          <span>Ar condicionado</span>
          <span>Banheiro</span>
        </div>

        <div className="
        flex
  items-center
  justify-between
w-full


">
        <div className="flex flex-col w-full">
          <span className="text-2xl font-bold ">
            R$ {selectedRoute?.valor},00
          </span>
          <span className="text-sm text-gray-500">Valor por passageiro</span>
        </div>
        <button
          className="
          bg-blue-500
          hover:bg-blue-600
          text-white
          rounded-xl
          py-2
          px-4
          w-full
          text-center
          transition
          duration-200
          ease-in-out
"
        >
          Selecionar assentos
          </button>
        </div>
          
      </div>
    </div>
  )
}

export default Details
