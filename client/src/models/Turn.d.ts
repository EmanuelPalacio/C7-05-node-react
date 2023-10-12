import { Status } from '../types/status';
import { Uid } from './User';

export interface GenerateTurn {
  name: string;
  time: number | undefined;
}
export interface Turn extends GenerateTurn {
  creationDate: Date | undefined;
  id: string;
}
export interface TurnResponse {
  ok: boolean;
  msg: string;
  data: Turn;
}
export interface TurnSlice extends Turn {
  status: Status;
  error: any;
}
export interface ListTurn {
  id: string;
  creationdate: Date;
  enddate: Date;
  name: string;
  time: number;
  uid: Uid;
  state: 'in progress' | 'delayed';
}
