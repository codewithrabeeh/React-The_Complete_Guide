import { useState, useEffect } from "react";

const useCounter = (num) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + num);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter
};

export default useCounter;
