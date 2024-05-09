export declare class Client {
    readonly id: string;
    codigo: string | null;
    companyName: string;
    socialName: string;
    cnpj: string | null;
    cpf: string | null;
    businessPhone_1: string | null;
    businessPhone_2: string | null;
    businessEmail: string | null;
    site: string | null;
    comment: string | null;
    cep: string | null;
    state: string | null;
    city: string | null;
    street: string | null;
    neighborhood: string | null;
    number: string | null;
    constructor(data?: Partial<Client>);
}
