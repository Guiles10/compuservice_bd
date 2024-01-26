import { randomUUID } from "crypto";
import * as moment from 'moment';

export class Task {
    readonly id:    string
    task:           string
    completed:      boolean
    suportCardId:   string
    readonly updatedAt:     string;
    readonly createdAt:     string;

    constructor() {
        this.id = randomUUID();
        this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
        this.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
    }
}