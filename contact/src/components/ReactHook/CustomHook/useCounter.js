import { useState } from "react";

function useCounter(intialValue = 0, value) {
  const [count, setCount] = useState(intialValue);

  const increment = () => {
    setCount((prevcount) => prevcount + value);
  };
  const decrement = () => {
    setCount((prevcount) => prevcount - value);
  };
  const reset = () => {
    setCount(intialValue);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
