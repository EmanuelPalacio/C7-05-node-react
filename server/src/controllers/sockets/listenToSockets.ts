import { Socket } from 'socket.io';
import { io } from '../../config';
import { Uid } from '../../types/user';
import { searchTurn } from '../../services/database';

export default function listenToSocket(socket: Socket) {
  socket.on('disconnect', () => {
    console.log('disconnect');
    io.fetchSockets().then((e) => console.log('🚀 ~ file: index.ts:35 ~ sockets:', e.length));
  });

  socket.on('getTurns', async (uid: Uid) => {
    const data = await searchTurn(uid);
    socket.emit('turnsList', data);
  });
}
