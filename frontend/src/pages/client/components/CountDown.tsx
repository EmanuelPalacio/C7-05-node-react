import { useState, useEffect, useMemo, useRef } from 'react';
import styles from '../styles/countDown.module.css';
import { SVGCircle } from './SVGCircle';
import data from '../turn.json';

const SECOND = 1000;
const MINUTE = SECOND * 60;

// const deadline = new Date(Date.now() + 1000 * 60 * 0.6);
// eslint-disable-next-line camelcase
function mapNumber(number: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  // eslint-disable-next-line camelcase
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export default function CountDown() {
  const [parsedDeadline, setParsedDeadline] = useState<number>(0);
  const [time, setTime] = useState(parsedDeadline - Date.now());
  const maxMinuteTime = ((parsedDeadline - Date.now()) / MINUTE) % 60;
  const timeRef = useRef(time);
  timeRef.current = time;

  useEffect(() => {
    const parsedTime = new Date(data.time).getTime();
    setParsedDeadline(parsedTime);
    setTime(parsedTime - Date.now());
  }, [data]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (timeRef.current <= 0) {
          clearInterval(interval);
        } else {
          setTime(parsedDeadline - Date.now());
        }
      },
      1000,
      [parsedDeadline],
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  console.log(time);

  const minuteTime = time >= 0 ? (time / MINUTE) % 60 : 0;
  const secondTime = time >= 0 ? (time / SECOND) % 60 : 0;
  const timeIsRunningOut = time <= MINUTE * 0.5;

  return (
    <div className={styles.timer}>
      <div className={`${styles.countdown_item} ${timeIsRunningOut && styles.timeIsRunningOut}`}>
        <p>{`${Math.floor(minuteTime)}`.padStart(2, '0')}</p>
        <span>Minutos</span>
        <SVGCircle radius={mapNumber(Math.floor(minuteTime), 0, Math.ceil(maxMinuteTime), 0, 360)} />
      </div>

      <div className={`${styles.countdown_item} ${timeIsRunningOut && styles.timeIsRunningOut}`}>
        <p>{`${Math.floor(secondTime)}`.padStart(2, '0')}</p>
        <span>Segundos</span>
        <SVGCircle stroke={timeIsRunningOut ? '#FF0000' : '#0F4C75'} radius={mapNumber(secondTime, 0, 60, 0, 360)} />
      </div>
    </div>
  );
}
