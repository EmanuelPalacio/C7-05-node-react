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

export interface ListTurn {
  id: string;
  creationdate: Date;
  enddate: Date;
  name: string;
  time: number;
  uid: Uid;
  state: 'in progress' | 'delayed' | 'completed';
}
export interface TurnSlice extends ListTurn {
  status: Status;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}
export interface TurnUpdate extends Pick<'uid', 'id', 'state', ListTurn> {}
