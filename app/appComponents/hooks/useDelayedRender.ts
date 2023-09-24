import React from "react";

const useDelayedRender = (delayDuration: number) => {
  if (delayDuration < 0) {
    throw new Error("delayDuration must be a positive number");
  }

  const [showLoader, setShowLoader] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, delayDuration);

    return () => clearTimeout(timer);
  }, [delayDuration]);

  return { showLoader };
};

export default useDelayedRender;
