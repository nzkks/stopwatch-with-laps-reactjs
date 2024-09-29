import { useState } from 'react';

import Controls from '../controls/Controls';
import LapsLogger from '../lapsLogger';
import FormattedTime from '../formattedTime';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  return (
    <>
      <div className="time">
        <FormattedTime time={time} />
      </div>

      <Controls time={time} setTime={setTime} setLaps={setLaps} />

      <LapsLogger laps={laps} />
    </>
  );
};

export default Stopwatch;
