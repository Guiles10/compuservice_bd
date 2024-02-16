import { randomUUID } from "crypto";
import * as moment from 'moment';


export class File {
    readonly id:    string
    filename:       string
    url:            string
    cardId:         string
    readonly updatedAt:     string;
    readonly createdAt:     string;

    constructor() {
        this.id = randomUUID();
        this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
        this.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
    }
}
