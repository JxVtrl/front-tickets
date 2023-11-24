import React from "react"
import { useForm } from "react-hook-form"
import { FormValues } from "../.."

type Props = {
  value: FormValues
  setValue: React.Dispatch<React.SetStateAction<FormValues>>
}

const Data: React.FC<Props> = ({ value, setValue }) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>()

  return (
    <div className="wrapper-input">
      <input
        className="input-ida"
        type="date"
        placeholder="Ida"
        {...register("data", {
          required: "Data é obrigatória",
        })}
        value={value.data}
        onChange={(e) => setValue({ ...value, data: e.target.value })}
      />
      {errors.data && (
        <span className="error-message-home">{errors.data.message}</span>
      )}
    </div>
  )
}

export default Data
