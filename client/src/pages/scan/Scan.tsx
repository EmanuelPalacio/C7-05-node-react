import { useEffect } from 'react';
import { QRanimate, QrCode } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setTurn } from '../../store/slices/turn';

export default function Scan() {
  const user = useAppSelector((store) => store.user);
  const turn = useAppSelector((store) => store.turn);
  const dispatch = useAppDispatch();
  console.log('🚀 ~ file: Scan.tsx:9 ~ Scan ~ user:', user);

  useEffect(() => {
    addEventListener('storage', (event) => {
      if (event.key === 'turn') {
        dispatch(setTurn(JSON.parse(event.newValue!)));
      }
    });
  }, []);

  return user?.token ? (
    <section>{turn?.id && turn?.uid ? <QrCode data={{ uid: turn.uid, id: turn.id }} /> : <QRanimate />}</section>
  ) : (
    <h1>DESCANSANDO</h1>
  );
}
