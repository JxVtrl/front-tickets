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
  const dateSplit = date.split("/")

  const day = dateSplit[0].toString().padStart(2, "0")
  const month = dateSplit[1].toString().padStart(2, "0")
  const year = dateSplit[2]

  return `${day}/${month}/${year}`
}

export const format_hour = (hour: string) => {
  const hourSplit = hour.split(":")

  const hourNew = hourSplit[0].toString().padStart(2, "0")
  const minute = hourSplit[1].toString().padStart(2, "0")

  return `${hourNew}:${minute}`
}

export const orderByYearThenByMonthThenByDayThenHour = (a: Rota, b: Rota) => {
  const hora_ida_a = a.hora_ida.split(":")[0].padStart(2, "0")  
  const minuto_ida_a = a.hora_ida.split(":")[1].padStart(2, "0") 
  const data_ida_a = a.data_ida.split(a.data_ida.includes(',') ?',' :"/")
  const dia_a = Number(data_ida_a[0]) < 10 ? `0${data_ida_a[0]}` : data_ida_a[0]
  const mes_a = Number(data_ida_a[1]) < 10 ? `0${Number(data_ida_a[1])}` : data_ida_a[1]
  const ano_a = data_ida_a[2]
  
  const hora_ida_b = b.hora_ida.split(":")[0].padStart(2, "0")
  const minuto_ida_b = b.hora_ida.split(":")[1].padStart(2, "0")
  const data_ida_b = b.data_ida.split(b.data_ida.includes(',') ?',' :"/")
  const dia_b = Number(data_ida_b[0]) < 10 ? `0${Number(data_ida_b[0])}` : Number(data_ida_b[0])
  const mes_b = Number(data_ida_b[1]) < 10 ? `0${Number(data_ida_b[1])}` : Number(data_ida_b[1])
  const ano_b = Number(data_ida_b[2])
  
  const data_a = new Date(`${ano_a}-${mes_a}-${dia_a}T${hora_ida_a}:${minuto_ida_a}`)
  const data_b = new Date(`${ano_b}-${mes_b}-${dia_b}T${hora_ida_b}:${minuto_ida_b}`)
  
  return data_a.getTime() - data_b.getTime()
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

export function travelTime(hora_ida: string, hora_chegada: string) {
  const [horaIdaHours, horaIdaMinutes] = hora_ida.split(':').map(Number);
  const [horaChegadaHours, horaChegadaMinutes] = hora_chegada.split(':').map(Number);

  let diffHours = horaChegadaHours - horaIdaHours;
  let diffMinutes = horaChegadaMinutes - horaIdaMinutes;

  // Se a hora de ida for maior que a hora de chegada, adiciona 24 horas para corrigir a diferença
  if (diffHours < 0) {
    diffHours += 24;
  }

  // Se os minutos de ida forem maiores que os minutos de chegada, subtrai 1 hora e adiciona 60 minutos para corrigir a diferença
  if (diffMinutes < 0) {
    diffHours -= 1;
    diffMinutes += 60;
  }

  const totalDiff = diffHours + diffMinutes / 60;
  
  return `${totalDiff.toFixed(0)}h ${diffMinutes.toFixed(0)}min`;

}

export const criar_rotas = () => {
  let rotas: Rota[] = []

  for (let i = 0; i < 50; i++) {
    const randomUser = generate_user()

    let origem = cidades[Math.floor(Math.random() * cidades.length)]
    let destino = cidades.filter((cidade) => cidade !== origem)[
      Math.floor(Math.random() * cidades.length)
    ]
    
    let random_day = Math.floor(Math.random() * 30) + 1
    let random_month = Math.floor(Math.random() * 12) + 1
    let random_year = Math.floor(Math.random() * 5) + 2023
    
    let rota: Rota = {
      id: i,
      origem,
      destino,
      data_ida: `${random_day}/${random_month}/${random_year}`,
      hora_ida: `${Math.floor(Math.random() * 24)}:${Math.floor(
        Math.random() * 60
      )}`,
      data_chegada: `${random_day}/${random_month}/${random_year}`,
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
