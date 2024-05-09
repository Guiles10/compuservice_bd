import { randomUUID } from "crypto";

export class Client {
    readonly id:    string
    codigo:         string | null;
    companyName:    string;
    socialName:     string;
    cnpj:           string | null;
    cpf:            string | null;
    businessPhone_1:  string | null;
    businessPhone_2:  string | null;
    businessEmail:  string | null;
    site:           string | null;
    comment:        string | null;
    cep:            string | null;
    state:          string | null;
    city:           string | null;
    street:         string | null;
    neighborhood:   string | null;
    number:         string | null;

    constructor(data?: Partial<Client>) {
        this.id = randomUUID();
        this.codigo = data?.codigo || null;
        this.socialName = data?.socialName || null;
        this.cnpj = data?.cnpj || null;
        this.cpf = data?.cpf || null;
        this.businessPhone_1 = data?.businessPhone_1 || null;
        this.businessPhone_2 = data?.businessPhone_2 || null;
        this.businessEmail = data?.businessEmail || null;
        this.site = data?.site || null;
        this.comment = data?.comment || null;
        this.cep = data?.cep || null;
        this.state = data?.state || null;
        this.city = data?.city || null;
        this.street = data?.street || null;
        this.neighborhood = data?.neighborhood || null;
        this.number = data?.number || null;
    }
}
