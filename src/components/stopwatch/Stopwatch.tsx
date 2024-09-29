import { useEffect, useState } from 'react';
import useFormatTime from '../../hooks/useFormatTime';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = 0;

    if (isRunning) {
      interval = setInterval(() => setTime(time => time + 100), 100);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const { getFormattedTime } = useFormatTime();
  const { hours, minutes, seconds, milliSeconds } = getFormattedTime(time);

  return (
    <>
      <div className="time">{`${hours}:${minutes}:${seconds}.${milliSeconds}`}</div>

      <div className="buttons">
        {!isRunning && !time && <button onClick={() => setIsRunning(true)}>Start</button>}
        {!isRunning && time > 0 && <button onClick={() => setIsRunning(true)}>Resume</button>}
        {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}
        {/* {isRunning && <button>Lap</button>} */}
        {!isRunning && time > 0 && <button onClick={() => setTime(0)}>Reset</button>}
      </div>
    </>
  );
};

export default Stopwatch;
