import React from "react"
import { useForm } from "react-hook-form"
import { FormValues } from "../.."
type Props = {
  value: FormValues
  setValue: React.Dispatch<React.SetStateAction<FormValues>>
}
const Origem: React.FC<Props> = ({ setValue, value }) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>()

  return (
    <div className="wrapper-input">
      <input
        className="input-origem"
        type="text"
        placeholder="Origem"
        {...register("origem", { required: "Origem é obrigatória" })}
        value={value.origem}
        onChange={(e) => setValue({ ...value, origem: e.target.value })}
      />
      {errors.origem && (
        <span className="error-message-home origin-error">
          {errors.origem.message}
        </span>
      )}
    </div>
  )
}

export default Origem
