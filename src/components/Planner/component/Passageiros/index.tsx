import React from "react"
import { FormValues } from "../.."
import { useForm } from "react-hook-form"

type Props = {
  value: FormValues
  setValue: React.Dispatch<React.SetStateAction<FormValues>>
}

const Passageiros: React.FC<Props> = ({ setValue, value }) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>()
  return (
    <div className="wrapper-input">
      <input
        className="input-passageiros"
        type="number"
        placeholder="Passageiros"
        {...register("passageiros", {
          required: "Número de passageiros é obrigatório",
          valueAsNumber: true,
          validate: (value) => value > 0 || "Selecione o número de passageiros",
        })}
        value={value.passageiros}
        onChange={(e) =>
          setValue({
            ...value,
            passageiros: Number(e.target.value),
          })
        }
      />
      {errors.passageiros && (
        <span className="error-message-home">{errors.passageiros.message}</span>
      )}
    </div>
  )
}

export default Passageiros
