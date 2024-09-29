import { useState } from 'react';

import Controls from '../controls/Controls';
import LapsLogger from '../lapsLogger';
import useFormatTime from '../../hooks/useFormatTime';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  const { getFormattedTime } = useFormatTime();
  const { hours, minutes, seconds, milliSeconds } = getFormattedTime(time);

  return (
    <>
      <div className="time">{`${hours}:${minutes}:${seconds}.${milliSeconds}`}</div>

      <Controls time={time} setTime={setTime} setLaps={setLaps} />

      <LapsLogger laps={laps} />
    </>
  );
};

export default Stopwatch;
