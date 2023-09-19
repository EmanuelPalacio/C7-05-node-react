import { Status } from '../types/status';

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
