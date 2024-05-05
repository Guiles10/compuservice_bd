import { randomUUID } from "crypto";
import * as moment from 'moment';

export class File {
    readonly id: string;
    fileName: string;
    url: string;
    cardId: string;
    readonly updatedAt: string;
    readonly createdAt: string;

    constructor(data?: Partial<File>) {
        this.id = data?.id || randomUUID();

        this.updatedAt = data?.updatedAt || moment().format('DD/MM/YYYY HH:mm:ss');
        this.createdAt = data?.createdAt || moment().format('DD/MM/YYYY HH:mm:ss');
    }
}
