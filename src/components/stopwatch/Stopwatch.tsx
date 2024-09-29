import { useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div>
      <h1>00:00:00:00</h1>

      <div className="buttons">
        {!isRunning && !time && <button onClick={() => setIsRunning(true)}>Start</button>}
        {!isRunning && time > 0 && <button onClick={() => setIsRunning(true)}>Resume</button>}
        {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}
        {/* {isRunning && <button>Lap</button>} */}
        {!isRunning && time > 0 && <button onClick={() => setTime(0)}>Reset</button>}
      </div>
    </div>
  );
};

export default Stopwatch;
