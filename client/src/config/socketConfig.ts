import { io } from 'socket.io-client';
import { URL } from '.';

export const socket = io(URL, {
  autoConnect: false,
});
