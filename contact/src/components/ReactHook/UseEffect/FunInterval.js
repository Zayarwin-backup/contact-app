import React, {
  useState,
  useEffect,
} from "react";

function FunInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(add, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  return <div>{count}</div>;
}

export default FunInterval;
