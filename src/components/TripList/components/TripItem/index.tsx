import ArrowRight from "@/assets/icons/ArrowRight"
import { Rota } from "@/types"
import { format_date, format_hour } from "@/utils/functions"
import Link from "next/link"
import React from "react"

type TripItemProps = {
  rota: Rota
}

const TripItem: React.FC<TripItemProps> = ({ rota }) => {
  return (
    <Link
      href={{
        pathname: `/selecionar`,
        query: { id: rota.id },
      }}
      key={rota.id}
      className="flex justify-between items-center w-full  bg-white shadow-md p-4 my-4 max-w-[800px] mx-auto rounded-md cursor-pointer hover:shadow-lg transition duration-200 ease-in-out"
    >
      <div>
        <div className="flex items-center justify-center text-center gap-2">
          <h3>{rota.origem}</h3>
          <ArrowRight />
          <h3>{rota.destino}</h3>
        </div>
        <p>
          {format_date(rota.data_ida)} - {format_hour(rota.hora_ida)}
        </p>
      </div>
      <p>R$ {rota.valor}</p>
    </Link>
  )
}

export default TripItem
