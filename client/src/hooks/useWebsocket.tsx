import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { URL } from '../config';
import { useAppSelector } from './reduxHooks';

export default function useWebsocket() {
  const user = useAppSelector((store) => store.user);
  const socket = io(URL, {
    autoConnect: false,
    auth: {
      token: user.token,
      uid: user.uid,
    },
  });
  useEffect(() => {
    if (user.token) {
      socket.connect();
    } else {
      socket.disconnect();
    }
    return () => {
      socket.disconnect();
    };
  }, [socket, user.token]);
  return socket;
}
