import { Socket } from 'socket.io';
import { KEY_GENERATE_TOKEN, io } from '../../config';
import { Uid } from '../../types/user';
import { searchTurn } from '../../services/database';
import { TokenExpiredError, verify } from 'jsonwebtoken';

export default function listenToSocket(socket: Socket) {
  try {
    if (socket.handshake.auth.token) {
      verify(socket.handshake.auth.token, KEY_GENERATE_TOKEN);
    } else {
      socket.emit('error', { token: 'invalid-token' });
      socket.disconnect();
      return;
    }
    socket.on('disconnect', () => {
      console.log('disconnect');
      io.fetchSockets().then((e) => console.log('🚀 ~ file: index.ts:35 ~ sockets:', e.length));
    });
    socket.on('getTurns', async (uid: Uid) => {
      const data = await searchTurn(uid);
      socket.emit('turnsList', data);
    });
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      socket.emit('error', { token: 'invalid-token' });
      socket.disconnect();
      return;
    }
  }
}
