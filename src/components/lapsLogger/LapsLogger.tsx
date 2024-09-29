import FormattedTime from '../formattedTime';

const LapsLogger = ({ laps }: { laps: number[] }) => {
  return (
    <div className="lapsContainer">
      {laps.length > 0 && laps.map((lap, index) => <Lap key={index} time={lap} index={index} />)}
    </div>
  );
};

const Lap = ({ time, index }: { time: number; index: number }) => {
  return (
    <div className="lapsRow">
      <div>Lap {index + 1}</div>
      <div>
        <FormattedTime time={time} />
      </div>
    </div>
  );
};

export default LapsLogger;
