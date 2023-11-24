"use client"

import { useApp } from "@/contexts/contextApi"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Origem from "./component/Origem"
import Data from "./component/Data"
import Destino from "./component/Destino"
import Passageiros from "./component/Passageiros"
import Limpar from "./component/Limpar"
import Buscar from "./component/Buscar"

export interface FormValues {
  origem: string
  destino: string
  data: string
  passageiros: number
}

const Planner: React.FC = () => {
  const { rotas } = useApp()
  const [formData, setFormData] = useState<FormValues>({
    origem: "",
    destino: "",
    data: "",
    passageiros: 0,
  })

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  // Função para enviar os dados do formulário
  const onSubmit = (data: FormValues) => {
    // Verificar se existe alguma rota com os dados do formulário
    const rotaEncontrada = rotas.find(
      (rota) =>
        rota.origem === data.origem &&
        rota.destino === data.destino &&
        rota.data_ida === data.data
    )

    // Se não existir, mostrar mensagem de erro
    if (!rotaEncontrada) {
      alert("Não foi possível encontrar uma rota com os dados informados")
      return
    }
  }

  // Função para limpar todos os campos
  const limparCampos = () => {
    setFormData({
      origem: "",
      destino: "",
      data: "",
      passageiros: 0,
    })
  }
  return (
    <div className="box-select-wrapper mx-5">
      <form className="planner-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
          <Origem value={formData} setValue={setFormData}/>
          <Data value={formData} setValue={setFormData} />
        </div>

        <div className="input-block">
          <Destino value={formData} setValue={setFormData} />

          <div className="finalizar-busca-container">
            <Passageiros value={formData} setValue={setFormData} />
            <Limpar limparCampos={limparCampos} />
            <Buscar/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Planner
