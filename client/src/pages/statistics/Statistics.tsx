import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useAppSelector, useWebsocket } from '../../hooks';

export default function Statistics() {
  const socket = useWebsocket();
  const { uid } = useAppSelector((store) => store.user);
  const [list, setList] = useState([]);
  console.log('🚀 ~ file: Statistics.tsx:9 ~ Statistics ~ list:', list);
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
        <div className={style.scroll_table}>
          <table className={style.table}>
            <thead>
              <th>ID</th>
              <th>tiempo</th>
              <th>nombre</th>
            </thead>
            <tbody>
              {list.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.id}</td>
                    <td>{e.id}</td>
                  </tr>
                );
              })}
              {list.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.id}</td>
                    <td>{e.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
