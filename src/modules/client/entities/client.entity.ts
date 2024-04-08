import { randomUUID } from "crypto";
import * as moment from 'moment';

export class Client {
    readonly id:    string;
    codigo:         string;
    companyName:    string;
    socialName:     string;
    cnpj:           string | null;
    businessPhone_1:  string;
    businessPhone_2:  string;
    businessEmail:  string | null;
    comment:        string | null;
    cep:            string | null;
    state:          string | null;
    city:           string | null;
    street:         string | null;
    neighborhood:   string | null;
    number:         string | null;

    constructor() {
        this.id = randomUUID();
        this.businessPhone_1 = null;
        this.businessPhone_2 = null;
    }
}
