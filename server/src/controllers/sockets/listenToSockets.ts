import { Socket } from 'socket.io';
import { KEY_GENERATE_TOKEN, io } from '../../config';
import { Uid } from '../../types/user';
import { searchTurn, updateTurns } from '../../services/database';
import { TokenExpiredError, verify } from 'jsonwebtoken';

export default function listenToSocket(socket: Socket) {
  try {
    if (socket.handshake.auth.token) {
      verify(socket.handshake.auth.token, KEY_GENERATE_TOKEN);
      io.fetchSockets().then((e) => console.log('🚀 ~ file: index.ts:35 ~ sockets:', e.length));
    } else {
      socket.emit('error', { token: 'invalid-token' });
      socket.disconnect();
      return;
    }

    socket.on('disconnect', () => {
      console.log('disconnect', socket.id);
    });
    socket.on('getTurns', async (uid: Uid) => {
      const data = await searchTurn(uid);
      socket.emit('turnsList', data);
    });

    socket.on('finishTurn', async ({ uid, id }: { uid: Uid; id: string }) => {
      console.log('completed');
      await updateTurns({ uid, id, state: 'completed' });
      const data = await searchTurn(uid);
      console.log('🚀 ~ file: listenToSockets.ts:27 ~ socket.on ~ data:', data);
      io.emit('turnsList', data);
    });
    socket.on('testing', () => {
      console.log('testing');
    });
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      socket.emit('error', { token: 'invalid-token' });
      socket.disconnect();
      return;
    }
  }
}
