import { useEffect, useState } from 'react';

export default function Timer({ endDate }: { endDate: Date }) {
  const time = (new Date(endDate).getTime() - new Date().getTime()) / 1000;
  const [timerRemaining, setTimerRemaining] = useState(time);
  const formatTimer = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}`;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerRemaining > 0) {
        setTimerRemaining((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timer = formatTimer(timerRemaining);

  return <span>{timer}</span>;
}
