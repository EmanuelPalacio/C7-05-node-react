import { Uid } from './user';

export interface TurnRequest {
  uid: Uid;
  name: string;
  time: number;
}

export interface TurnCreate extends TurnRequest {
  id: string;
  creationDate: Date;
  endDate: Date;
  state: 'in progress' | 'delayed';
}
