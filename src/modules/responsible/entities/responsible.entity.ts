import { randomUUID } from "crypto";

export class Responsible {
    readonly id:    string;
    name:           string;
    function:       string | null;
    email:          string | null;
    phone:          string | null;
    clientId?:      string;

    constructor() {
        this.id = randomUUID();
    }
}
