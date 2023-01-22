import React, { useState } from "react";

function UseStateCountTwo() {
  let intitalCount = 0;
  const [count, setCount] =
    useState(intitalCount);

  const fiveIncrement = () => {
    for (let i = 0; i < 5; i++) {
      setCount((preveCount) => preveCount + 1);
    }
  };
  return (
    <div>
      Increase {count}
      <button
        onClick={() => setCount(intitalCount)}
      >
        Reset
      </button>
      <button
        onClick={() =>
          setCount((preveCount) => preveCount + 1)
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          setCount((preveCount) => preveCount - 1)
        }
      >
        Decrement
      </button>
      <button onClick={fiveIncrement}>
        FiveIncrement
      </button>
    </div>
  );
}

export default UseStateCountTwo;
