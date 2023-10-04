import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useAppSelector, useWebsocket } from '../../hooks';
import { ListTurn } from '../../models/Turn';
import ListTurns from './components/listTurns/ListTurns';
import CircleChart from './components/circleChart/CircleChart';
import ChartLine from './components/chartLine/ChartLine';
import { QRanimate } from '../../components';

export default function Statistics() {
  const socket = useWebsocket();
  const { uid } = useAppSelector((store) => store.user);
  const [list, setList] = useState<ListTurn[]>([]);
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
    return () => {
      socket.off('turnsList');
      socket.off('getTurns');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={style.container}>
      <div className={style.container_table}>
        <div className={`${style.scroll_table} ${style.shadow_effect}`}>
          <ListTurns arrayList={list} />
        </div>
      </div>
      <div className={style.container_statics}>
        <div className={`${style.finish_turn} ${style.shadow_effect}`}>
          {closerTime ? (
            <>
              <h3>{closerTime.name}</h3>
              <p>
                <span>#</span>
                {closerTime.id}
              </p>
              <span>{closerTime.time}</span>
            </>
          ) : (
            <div>
              <QRanimate />
            </div>
          )}
        </div>
        <div className={`${style.pie_chart} ${style.shadow_effect}`}>
          <CircleChart />
        </div>
        <div className={`${style.line_chart} ${style.shadow_effect}`}>
          <ChartLine />
        </div>
      </div>
    </section>
  );
}
