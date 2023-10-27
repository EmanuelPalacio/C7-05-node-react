import { useState, useEffect, useCallback } from 'react';

export default function Timer({ endDate }: { endDate: Date }) {
  const calculateTime = useCallback((date: Date): number => {
    return (new Date(date).getTime() - new Date().getTime()) / 1000;
  }, []);
  const [timerRemaining, setTimerRemaining] = useState(calculateTime(endDate));
  const formatTimer = (time: number) => {
    if (time > 0) {
      const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, '0');

      return `${minutes}:${seconds}`;
    } else {
      return 'Pedido listo';
    }
  };
  const timer = formatTimer(timerRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerRemaining > 0) {
        setTimerRemaining((prev) => prev - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timerRemaining]);

  useEffect(() => {
    const comparative = calculateTime(endDate);
    setTimerRemaining(comparative);
  }, [endDate]);

  return <span>{timer}</span>;
}
