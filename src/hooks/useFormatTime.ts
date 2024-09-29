const useFormatTime = () => {
  const getFormattedTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time - hours * 3600000) / 60000);
    const seconds = Math.floor((time - hours * 3600000 - minutes * 60000) / 1000);
    const milliSeconds = Math.floor((time - hours * 3600000 - minutes * 60000 - seconds * 1000) / 100);

    return {
      hours: hours < 10 ? `0${hours}` : `${hours}`,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      milliSeconds: `${milliSeconds}`,
    };
  };

  return { getFormattedTime };
};

export default useFormatTime;
