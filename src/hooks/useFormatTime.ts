const useFormatTime = () => {
  const getFormattedTime = (time: number) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliSeconds = Math.floor((time % 1000) / 100);

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
