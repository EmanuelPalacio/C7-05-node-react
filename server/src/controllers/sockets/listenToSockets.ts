import { Socket } from 'socket.io';
import { KEY_GENERATE_TOKEN, io } from '../../config';
import { Uid } from '../../types/user';
import { searchTurn, searchTurnById, updateTurns } from '../../services/database';
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
      await updateTurns({ uid, id, state: 'completed' });
      const data = await searchTurn(uid);
      socket.emit('turnsList', data);
    });
    socket.on('delay', async ({ uid, id, min }: { uid: Uid; id: string; min: number }) => {
      await updateTurns({ uid, id, state: 'delayed', min });
      const data = await searchTurn(uid);
      const changedShift = data?.find((e) => e.id === id);
      socket.to(id + uid).emit('delayNotice', changedShift);
      socket.emit('turnsList', data);
    });
    socket.on('CustomerView', async (data) => {
      socket.join(data.id + data.uid);
      const search = await searchTurnById(data);
      socket.emit('CustomerViewData', search);
    });
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      socket.emit('error', { token: 'invalid-token' });
      socket.disconnect();
      return;
    }
  }
}
