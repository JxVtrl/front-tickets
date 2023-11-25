import { cidades } from "@/data/cidades"
import { Rota } from "@/types"
import { faker } from "@faker-js/faker"

export const random_date = (start: Date, end: Date) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export const format_date = (date: string) => {
  const dateNew = new Date(date)

  const day = dateNew.getDate().toString().padStart(2, "0")
  const month = (dateNew.getMonth() + 1).toString().padStart(2, "0")
  const year = dateNew.getFullYear()

  return `${day}/${month}/${year}`
}

export const format_hour = (hour: string) => {
  const hourSplit = hour.split(":")

  const hourNew = hourSplit[0].toString().padStart(2, "0")
  const minute = hourSplit[1].toString().padStart(2, "0")

  return `${hourNew}:${minute}`
}

export const orderByYearThenByMonthThenByDayThenHour = (a: Rota, b: Rota) => {
  
  // padStart(2, "0") -> 1 -> 01
  const hora_ida_a = a.hora_ida.split(":")[0].padStart(2, "0")  
  const minuto_ida_a = a.hora_ida.split(":")[1].padStart(2, "0") 
  const data_ida_a = new Date(a.data_ida)
  const dia_a = data_ida_a.getDate() < 10 ? `0${data_ida_a.getDate()}` : data_ida_a.getDate() 
  const mes_a = data_ida_a.getMonth() < 10 ? `0${data_ida_a.getMonth()}` : data_ida_a.getMonth()
  const ano_a = data_ida_a.getFullYear()
  
  const formatada_a = `${ano_a}-${mes_a}-${dia_a}:${hora_ida_a}:${minuto_ida_a}`
  
  const hora_ida_b = b.hora_ida.split(":")[0].padStart(2, "0")
  const minuto_ida_b = b.hora_ida.split(":")[1].padStart(2, "0")
  const data_ida_b = new Date(b.data_ida)
  const dia_b = data_ida_b.getDate() < 10 ? `0${data_ida_b.getDate()}` : data_ida_b.getDate()
  const mes_b = data_ida_b.getMonth() < 10 ? `0${data_ida_b.getMonth()}` : data_ida_b.getMonth()
  const ano_b = data_ida_b.getFullYear()

  const formatada_b = `${ano_b}-${mes_b}-${dia_b}:${hora_ida_b}:${minuto_ida_b}`
  
  
  if (formatada_a < formatada_b) return -1
  if (formatada_a > formatada_b) return 1
  return 0



}

export const random_boolean = () => {
  return Math.random() < 0.5
}

export const generate_user = () => {
  const user = {
    id: faker.string.uuid(),
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    telefone: faker.phone.number(),
    data_nascimento: random_date(new Date(1980, 0, 1), new Date(2000, 0, 1)),
    senha: faker.internet.password(),
  }

  return user
}

export const gerarAssentos = () => {
  let assentos = []

  for (let i = 0; i < 10; i++) {
    assentos.push({
      id: i,
      numero: i + 1,
      ocupado: random_boolean(),
    })
  }

  return assentos
}

export const gerarValor = (min = 0, max = 1000) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const criar_rotas = () => {
  let rotas: Rota[] = []

  for (let i = 0; i < 100; i++) {
    const randomUser = generate_user()

    let origem = cidades[Math.floor(Math.random() * cidades.length)]
    let destino = cidades.filter((cidade) => cidade !== origem)[
      Math.floor(Math.random() * cidades.length)
    ]

    let rota: Rota = {
      id: i,
      origem,
      destino,
      data_ida: random_date(new Date(), new Date(2025, 12, 31)),
      hora_ida: `${Math.floor(Math.random() * 24)}:${Math.floor(
        Math.random() * 60
      )}`,
      data_chegada: random_date(new Date(), new Date(2025, 12, 31)),
      hora_chegada: `${Math.floor(Math.random() * 24)}:${Math.floor(
        Math.random() * 60
      )}`,
      assentos: gerarAssentos(),
      valor: gerarValor(),
      motorista: {
        email: randomUser.email,
        nome: randomUser.nome,
        telefone: randomUser.telefone,
        id: randomUser.id,
      },
    }
    rotas.push(rota)
  }

  return rotas
}
