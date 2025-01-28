export interface ClienteDto {
    id: string;
    nome: string;
    cpf: string;
    situacao: number;
    email: string;
    telefone: string;
}
export interface EnderecoClienteDto {
    enderecoId: string;
    uf: string;
    cidade: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
    complemento: string;
}

export interface ClienteComEnderecoDto {
    id: string;
    nome: string;
    cpf: string;
    situacao: number;
    email: string;
    telefone: string;
    enderecos: EnderecoClienteDto[];
    // fazendas: FazendaDto[];
}