import useFormatTime from '../../hooks/useFormatTime';

const FormattedTime = ({ time }: { time: number }) => {
  const { getFormattedTime } = useFormatTime();
  const { hours, minutes, seconds, milliSeconds } = getFormattedTime(time);
  return <>{`${hours}:${minutes}:${seconds}.${milliSeconds}`}</>;
};

export default FormattedTime;
