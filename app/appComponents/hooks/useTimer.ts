import React from "react";

const useTimer = (initialTime: number) => {
  const [timer, setTimer] = React.useState(initialTime);

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timer]);

  return { timer, setTimer };
};

export default useTimer;
