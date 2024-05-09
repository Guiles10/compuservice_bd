import { randomUUID } from "crypto";
// import * as moment from 'moment';

export class Comments {
  readonly id: string;
  title: string;
  comment: string;
  priority: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;

  constructor() {
    this.id = randomUUID();
    // this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    // this.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
  }
}
