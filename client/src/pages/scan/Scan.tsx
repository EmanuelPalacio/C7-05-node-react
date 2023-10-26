import { useEffect } from 'react';
import style from './style.module.css';
import { QRanimate, QrCode, QRillustration } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { reset, setTurn } from '../../store/slices/turn';

export default function Scan() {
  const user = useAppSelector((store) => store.user);
  const turn = useAppSelector((store) => store.turn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key === 'turn') {
        dispatch(setTurn(JSON.parse(event.newValue!)));
      }
    };
    if (turn.id) {
      interval = setInterval(() => {
        dispatch(reset());
      }, 120 * 1000);
    }
    addEventListener('storage', handleStorageEvent);
    return () => {
      removeEventListener('storage', handleStorageEvent);
      clearInterval(interval);
    };
  }, [dispatch, turn]);

  return user?.token ? (
    <section className={style.container}>
      <QRillustration classStyle={style.svg}>
        {turn?.id && turn?.uid ? (
          <div>
            <QrCode data={{ size: 100, uid: turn.uid, id: turn.id }} />
            <p className={style.name}>
              Puede escanear el turno <span>{turn.name}</span>
            </p>
          </div>
        ) : (
          <QRanimate />
        )}
      </QRillustration>
    </section>
  ) : (
    <h1>DESCANSANDO</h1>
  );
}
