export type Assento = {
    id: number,
    numero: number,
    ocupado: boolean,
}

export type Motorista = {
    id: number,
    nome: string,
    telefone: string,
    email: string,
}

export type Rota = {
    id: number,
    nome: string,
    origem: string,
    destino: string,
    data: string,
    hora: string,
    data_chegada: string,
    hora_chegada: string,
    assentos: Assento[],
    valor: number,
    motorista: Motorista,
}