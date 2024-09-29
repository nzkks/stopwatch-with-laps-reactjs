import useFormatTime from '../../hooks/useFormatTime';

const LapsLogger = ({ laps }: { laps: number[] }) => {
  return (
    <div className="lapsContainer">
      {laps.length > 0 && laps.map((lap, index) => <Lap key={index} time={lap} index={index} />)}
    </div>
  );
};

const Lap = ({ time, index }: { time: number; index: number }) => {
  const { getFormattedTime } = useFormatTime();
  const { hours, minutes, seconds, milliSeconds } = getFormattedTime(time);

  return (
    <div className="lapsRow">
      <div>Lap {index + 1}</div>
      <div>{`${hours}:${minutes}:${seconds}.${milliSeconds}`}</div>
    </div>
  );
};

export default LapsLogger;
