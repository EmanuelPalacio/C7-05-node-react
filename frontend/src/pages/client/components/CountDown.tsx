import { useState, useEffect, useMemo } from 'react';
import styles from '../styles/countDown.module.css';
import { SVGCircle } from './SVGCircle';

const SECOND = 1000;
const MINUTE = SECOND * 60;

const deadline = new Date(Date.now() + (1000*60*5)); // 15 minutos a partir del momento en que se genera la página

// eslint-disable-next-line camelcase
function mapNumber(number: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  // eslint-disable-next-line camelcase
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export default function CountDown() {
  const parsedDeadline = useMemo(() => Date.parse(deadline.toString()), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());
  const [maxTime] = useState((((parsedDeadline - Date.now()) / MINUTE) % 60) )
  /* console.log(new Date(time).toISOString().slice(11, 19)); */

  useEffect(() => {
    console.log(maxTime)
    const interval = setInterval(() => setTime(parsedDeadline - Date.now()), 1000);

    return () => clearInterval(interval);
  }, [parsedDeadline]);
  
  const minuteTime = (time / MINUTE) % 60;
  const secondTime = (time / SECOND) % 60;

  return (
    <div className={styles.timer}>

      <div className={styles.countdown_item}>
        <p>{`${Math.floor((time / MINUTE) % 60)}`.padStart(2, '0')}</p>
        <span>Minutos</span>
        <SVGCircle radius={mapNumber(Math.floor(minuteTime), 0, Math.ceil(maxTime), 0, 360)} />
      </div>

      <div className={styles.countdown_item}>
        <p>{`${Math.floor(secondTime)}`.padStart(2, '0')}</p>
        <span>Segundos</span>
        <SVGCircle radius={mapNumber(secondTime, 0, 60, 0, 360)} />
      </div>
  
    </div>
  );
}
