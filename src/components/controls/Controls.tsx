import { useEffect, useState } from 'react';

type Props = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setLaps: React.Dispatch<React.SetStateAction<number[]>>;
};

const Controls = ({ time, setTime, setLaps }: Props) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = 0;

    if (isRunning) {
      interval = setInterval(() => setTime(time => time + 100), 100);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  const handleReset = () => {
    setTime(0);
    setLaps([]);
  };

  return (
    <div className="buttons">
      {!isRunning && !time && <button onClick={() => setIsRunning(true)}>Start</button>}
      {!isRunning && time > 0 && <button onClick={() => setIsRunning(true)}>Resume</button>}
      {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}
      {isRunning && <button onClick={() => setLaps(laps => [...laps, time])}>Lap</button>}
      {!isRunning && time > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Controls;
