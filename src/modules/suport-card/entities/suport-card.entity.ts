import { randomUUID } from "crypto";
import * as moment from 'moment';

export class SuportCard {
  readonly id: string;
  title: string;
  description: string | null;
  solution: string | null;
  priority: string;
  status: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    this.updatedAt = moment().format('DD/MM/YYYY HH:mm:ss');
  }
}