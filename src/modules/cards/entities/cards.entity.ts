import { randomUUID } from "crypto";
// import * as moment from 'moment';

export class Cards {
  readonly id:  string;
  title:        string;
  description:  string | null;
  solution:     string | null;
  priority:     string;
  status:       string;
  readonly createdAt: string;
  readonly updatedAt: string;
  deleteAt:     string | null;
  userId:       string;
  type:         string[]
  clients:      string[]
  worker:      string[]

    constructor(data?: Partial<Cards>) {

      this.id = data?.id || randomUUID();

      this.description = data?.description || null;
      this.solution = data?.solution || null;

      // this.createdAt = data?.createdAt || moment().format('DD/MM/YYYY HH:mm:ss');
      // this.updatedAt = data?.updatedAt || moment().format('DD/MM/YYYY HH:mm:ss');
      this.deleteAt = data?.deleteAt || null;

      this.type = data?.type || [];
      this.clients = data?.clients || [];
      this.worker = data?.worker || [];
    }
  }