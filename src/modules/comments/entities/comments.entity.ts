import { randomUUID } from "crypto";
import * as moment from 'moment';

export class Comments {
  readonly id: string;
  comment: string;
  title: string;
  priority: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  userId: string;

  constructor(data?: Partial<Comments>) {
    this.createdAt = data?.createdAt || moment().format('DD/MM/YYYY HH:mm:ss');
    this.updatedAt = data?.updatedAt || moment().format('DD/MM/YYYY HH:mm:ss');

  }
}
