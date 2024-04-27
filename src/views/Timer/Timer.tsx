import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Timer.module.scss';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const handleMinutesChange = (key: string, target: EventTarget) => {
    if (target instanceof HTMLInputElement) {
      if (key === 'Enter' && +target.value > 0 && +target.value < 100000) {
        setSeconds(Math.floor(+target.value * 60));
        setIsFinished(true);
      }
    }
  };

  const timers = () => (seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60);

  return (
    <div className={styles.timer}>
      <Link to='/palitra'>Palitra Page</Link>

      <h1>{isFinished && !seconds ? 'Готово' : `${Math.floor(seconds / 60)} : ${timers()}`}</h1>
      <input
        type='number'
        placeholder='type the number'
        min={0}
        max={100000}
        onKeyDown={(e) => handleMinutesChange(e.key, e.target)}
      />
    </div>
  );
};

export default Timer;
