import React from "react"
import { FormValues } from "../.."
import { useForm } from "react-hook-form"

// import { Container } from './styles';
type Props = {
  value: FormValues
  setValue: React.Dispatch<React.SetStateAction<FormValues>>
}
const Destino: React.FC<Props> = ({ setValue, value }) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>()
  return (
    <div className="wrapper-input">
      <input
        className="input-destino"
        type="text"
        placeholder="Destino"
        {...register("destino", {
          required: "Destino é obrigatório",
        })}
        value={value.destino}
        onChange={(e) => setValue({ ...value, destino: e.target.value })}
      />
      {errors.destino && (
        <span className="error-message-home destiny-error">
          {errors.destino.message}
        </span>
      )}
    </div>
  )
}

export default Destino
