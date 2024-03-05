import { randomUUID } from "crypto";
import * as moment from 'moment';

export class Client {
    readonly id:    string;
    codigo:         string;
    companyName:    string;
    socialName:     string;
    cnpj:           string | null;
    businessPhone:  string;
    businessEmail:  string;
    comment:        string | null;
    cep:            string | null;
    state:          string | null;
    city:           string | null;
    street:         string | null;
    neighborhood:   string | null;
    number:         string | null;

    constructor() {
        this.id = randomUUID();
    }
}
