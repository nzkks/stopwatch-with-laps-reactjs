import { useState } from 'react';

import Controls from '../controls/Controls';
import useFormatTime from '../../hooks/useFormatTime';

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const { getFormattedTime } = useFormatTime();
  const { hours, minutes, seconds, milliSeconds } = getFormattedTime(time);

  return (
    <>
      <div className="time">{`${hours}:${minutes}:${seconds}.${milliSeconds}`}</div>

      <Controls time={time} setTime={setTime} />
    </>
  );
};

export default Stopwatch;
