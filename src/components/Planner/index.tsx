"use client"

import { useApp } from "@/contexts/contextApi"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

interface FormValues {
  origem: string
  destino: string
  data: string
  passageiros: number
}

const Planner: React.FC = () => {
  const {rotas}=useApp()
  const [formData, setFormData] = useState<FormValues>({
    origem: "",
    destino: "",
    data: "",
    passageiros: 0,
  })
    
  const {
    register,
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
      <form className="box-select" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs1-compra">
          <input
            className="input-origem"
            type="text"
            placeholder="Origem"
            {...register("origem", { required: "Origem é obrigatória" })}
            value={formData.origem}
            onChange={(e) =>
              setFormData({ ...formData, origem: e.target.value })
            }
          />
          {errors.origem && (
            <span className="error-message-home origin-error">
              {errors.origem.message}
            </span>
          )}

          <div className="inputs-ida-volta-container">
            <input
              className="input-ida"
              type="date"
              placeholder="Ida"
              {...register("data", {
                required: "Data é obrigatória",
              })}
              value={formData.data}
              onChange={(e) =>
                setFormData({ ...formData, data: e.target.value })
              }
            />
            {errors.data && (
              <span className="error-message-home">{errors.data.message}</span>
            )}
            {/* <input
              className="input-volta"
              type="date"
              placeholder="Volta"
              {...register("volta")}
              value={formData.volta}
              onChange={(e) =>
                setFormData({ ...formData, volta: e.target.value })
              }
            /> */}
          </div>
        </div>

        <div className="inputs2-compra">
          <input
            className="input-destino"
            type="text"
            placeholder="Destino"
            {...register("destino", {
              required: "Destino é obrigatório",
            })}
            value={formData.destino}
            onChange={(e) =>
              setFormData({ ...formData, destino: e.target.value })
            }
          />
          {errors.destino && (
            <span className="error-message-home destiny-error">
              {errors.destino.message}
            </span>
          )}

          <div className="finalizar-busca-container">
            <input
              className="input-passageiros"
              type="number"
              placeholder="Passageiros"
              {...register("passageiros", {
                required: "Número de passageiros é obrigatório",
                valueAsNumber: true,
                validate: (value) =>
                  value > 0 || "Selecione o número de passageiros",
              })}
              value={formData.passageiros}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  passageiros: Number(e.target.value),
                })
              }
            />
            {errors.passageiros && (
              <span className="error-message-home">
                {errors.passageiros.message}
              </span>
            )}
            <button
              type="button"
              className="botao-limpar"
              onClick={limparCampos}
            >
              Limpar busca
            </button>
            <button type="submit" className="botao-buscar">
              BUSCAR
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Planner
