import { randomUUID } from "crypto";
import * as moment from 'moment';

export class Task {
    readonly id: string;
    task: string;
    completed: boolean;
    cardsId: string;
    readonly updatedAt: string;
    readonly createdAt: string;

    constructor(data?: Partial<Task>) {
        this.id = data?.id || randomUUID();

        this.completed = data?.completed || false;

        this.updatedAt = data?.updatedAt || moment().format('DD/MM/YYYY HH:mm:ss');
        this.createdAt = data?.createdAt || moment().format('DD/MM/YYYY HH:mm:ss');
    }
}
