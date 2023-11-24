import { cidades } from "@/data/cidades"
import { Rota } from "@/types"
import { faker } from "@faker-js/faker"

export const random_date = (start: Date, end: Date) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
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
      data_ida: random_date(new Date(2021, 0, 1), new Date(2021, 11, 31)),
      hora_ida: `${Math.floor(Math.random() * 24)}:${Math.floor(
        Math.random() * 60
      )}`,
      data_chegada: random_date(new Date(2021, 0, 1), new Date(2021, 11, 31)),
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
