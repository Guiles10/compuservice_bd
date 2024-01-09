import { randomUUID } from "crypto"
import * as moment from 'moment';

export class SuportCard {
    readonly id: string 
    title: string
    descriptin: string | null
    tasks: string[] | null
    solution: string | null
    priority: string | null
    readonly createdAt: string
    readonly updatedAt: string
    user_id?: string

    constructor() {
        this.id = randomUUID()
        this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss')
        this.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss')
    }
}
