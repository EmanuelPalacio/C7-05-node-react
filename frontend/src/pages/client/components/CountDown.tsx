import { clear } from 'console';
import { useState, useEffect, useMemo } from 'react';
import styles from '../styles/countDown.module.css';
import { SVGCircle } from './SVGCircle';

const SECOND = 1000;
const MINUTE = SECOND * 60;

const deadline = new Date(Date.now() + 1000 * 60 * 0.6); // 15 minutos a partir del momento en que se genera la página

// eslint-disable-next-line camelcase
function mapNumber(number: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  // eslint-disable-next-line camelcase
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export default function CountDown() {
  const parsedDeadline = useMemo(() => new Date(deadline).getTime(), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());
  const maxMinuteTime = ((parsedDeadline - Date.now()) / MINUTE) % 60;

  useEffect(() => {
    const interval = setInterval(
      () => {
        setTime(parsedDeadline - Date.now());
      },
      1000,
      [parsedDeadline],
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  const minuteTime = time >= 0 ? (time / MINUTE) % 60 : 0;
  const secondTime = time >= 0 ? (time / SECOND) % 60 : 0;
  const isRed = time <= MINUTE * 0.5;

  return (
    <div className={styles.timer}>
      <div className={`${styles.countdown_item} ${isRed && styles.isRed}`}>
        <p>{`${Math.floor(minuteTime)}`.padStart(2, '0')}</p>
        <span>Minutos</span>
        <SVGCircle radius={mapNumber(Math.floor(minuteTime), 0, Math.ceil(maxMinuteTime), 0, 360)} />
      </div>

      <div className={`${styles.countdown_item} ${isRed && styles.isRed}`}>
        <p>{`${Math.floor(secondTime)}`.padStart(2, '0')}</p>
        <span>Segundos</span>
        <SVGCircle radius={mapNumber(secondTime, 0, 60, 0, 360)} />
      </div>
    </div>
  );
}
