import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useAppDispatch, useAppSelector, useWebsocket } from '../../hooks';
import { ListTurn } from '../../models/Turn';
import ListTurns from './components/listTurns/ListTurns';
import CircleChart from './components/circleChart/CircleChart';
import ChartLine from './components/chartLine/ChartLine';
import { QRanimate, QrCode } from '../../components';
import Timer from './components/timer/Timer';
import { setError } from '../../store/slices/turn';

export default function Statistics() {
  const dispatch = useAppDispatch();
  const socket = useWebsocket();
  const { uid } = useAppSelector((store) => store.user);
  const [list, setList] = useState<ListTurn[]>([]);
  const orderList = list.sort((a, b) => new Date(a.enddate).getTime() - new Date(b.enddate).getTime());
  const closerTime = list.find((turn) => {
    const date = new Date().getTime();
    const parse = new Date(turn.creationdate).getTime();
    const diference = (date - parse) / 1000 / 60;
    return diference <= turn.time;
  });
  useEffect(() => {
    socket.emit('getTurns', uid);
    socket.on('turnsList', (data) => {
      setList(data);
    });
    socket.on('error', () => {
      dispatch(setError());
    });
    return () => {
      socket.off('error');
      socket.off('turnsList');
      socket.off('getTurns');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={style.container}>
      <div className={style.container_table}>
        <div className={`${style.scroll_table} ${style.shadow_effect}`}>
          <ListTurns arrayList={orderList} />
        </div>
      </div>
      <div className={style.container_statics}>
        <div className={`${style.finish_turn} ${style.shadow_effect}`}>
          {closerTime ? (
            <>
              <div className={style.finish_QR}>
                <QrCode id={closerTime.id} />
              </div>
              <div className={style.finish_data}>
                <p>
                  <span>#</span>
                  {closerTime.id}
                </p>
                <p>{closerTime.name}</p>
                <Timer endDate={closerTime.enddate} />
              </div>
            </>
          ) : (
            <div className={`${style.finish_QR} ${style.finish_animate}`}>
              <QRanimate />
            </div>
          )}
        </div>
        <div className={`${style.pie_chart} ${style.shadow_effect}`}>
          <CircleChart />
        </div>
        <div className={`${style.line_chart} ${style.shadow_effect}`}>
          <ChartLine data={list} />
        </div>
      </div>
    </section>
  );
}
