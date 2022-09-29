import { useState, useEffect, useMemo } from 'react';
import styles from '../styles/countDown.module.css';
import { SVGCircle } from './SVGCircle';

const SECOND = 1000;
const MINUTE = SECOND * 60;

const deadline = new Date(Date.now() + (1000*60*15)); // 15 minutos a partir del momento en que se genera la página

// eslint-disable-next-line camelcase
function mapNumber(number: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  // eslint-disable-next-line camelcase
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export default function CountDown() {
  const parsedDeadline = useMemo(() => Date.parse(deadline.toString()), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());
  /* console.log(new Date(time).toISOString().slice(11, 19)); */

  useEffect(() => {

    const interval = setInterval(() => setTime(parsedDeadline - Date.now()), 1000);

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className={styles.timer}>
      {Object.entries({
        Minutos: (time / MINUTE) % 60,
        Segundos: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className={styles.countdown_item}>
          <p>{`${Math.floor(value)}`.padStart(2, '0')}</p>
          <span>{label}</span>
          <SVGCircle radius={mapNumber(value, 0, 60, 0, 360)} />
        </div>
      ))}
    </div>
  );
}
