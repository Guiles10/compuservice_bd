import { randomUUID } from "crypto";
import * as moment from 'moment';

export class Comments {
  readonly id: string;
  comment: string;
  priority: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    this.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
  }
}