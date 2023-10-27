import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';
import clock from '../../assets/images/clock.svg';
import { Timer } from '..';
import { socket } from '../../config';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ListTurn } from '../../models/Turn';
import { setTurn } from '../../store/slices/turn';

export default function CustomerView() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const user = useAppSelector((store) => store.user);
  const turn = useAppSelector((store) => store.turn);
  useEffect(() => {
    socket.auth = { token: user.token };
    socket.connect();
    socket.emit('CustomerView', params);
    socket.on('CustomerViewData', (data: ListTurn) => {
      dispatch(setTurn(data));
    });
    socket.on('delayNotice', (data: ListTurn) => {
      dispatch(setTurn(data));
    });
    return () => {
      socket.disconnect();
    };
  }, [user, params]);
  return (
    <section className={style.container}>
      <img className={style.svg} src={clock} alt='Reloj' />
      {turn.enddate && <Timer endDate={turn.enddate} />}
    </section>
  );
}
