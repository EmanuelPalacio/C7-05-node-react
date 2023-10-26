import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';
import clock from '../../assets/images/clock.svg';
import { Timer } from '..';
import { socket } from '../../config';
import { useAppSelector } from '../../hooks';
import { ListTurn } from '../../models/Turn';

export default function CustomerView() {
  const [client, setClient] = useState<ListTurn>();
  const params = useParams();
  const user = useAppSelector((store) => store.user);
  useEffect(() => {
    socket.auth = { token: user.token };
    socket.connect();
    socket.emit('CustomerView', params);
    socket.on('CustomerViewData', (data: ListTurn) => {
      setClient(data);
    });
    return () => {
      socket.disconnect();
    };
  }, [user, params]);
  return (
    <section className={style.container}>
      <img className={style.svg} src={clock} alt='Reloj' />
      {client && <Timer endDate={client.enddate} />}
    </section>
  );
}
