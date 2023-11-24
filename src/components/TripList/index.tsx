"use client"
import React from "react"
import { useApp } from "@/contexts/contextApi"
import Link from "next/link"

const TripList: React.FC = () => {
  const { rotas } = useApp()
  return (
    <div className="w-full max-w-[1600px] flex-col align-center justify-center m-auto py-5">
      <h2 className="text-center uppercase text-2xl font-bold text-gray-800 mb-4 ">
        Viagens disponíveis
      </h2>
      <div className="w-full flex-col align-center justify-center m-auto bg-white rounded-md shadow-md p-4">
        {rotas.map((rota) => {
          return (
            <Link
              href={{
                pathname: `/selecionar`,
                query: { id: rota.id },
              }}
              key={rota.id}
            >
              <div className="flex justify-between items-center w-full  bg-white shadow-md p-4 my-4">
                <div className="trip-info">
                  <h3>{rota.origem}</h3>
                  <h3>{rota.destino}</h3>
                  <p>{rota.data_ida}</p>
                </div>
                <div className="trip-price">
                  <p>R$ {rota.valor}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TripList
