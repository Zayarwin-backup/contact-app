import React, { useState, useMemo } from "react";

function MemoCoun() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increaseOne = () => {
    setCounterOne(counterOne + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 300000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  const increaseTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  return (
    <div>
      <div>
        <button onClick={increaseOne}>
          Counter One - {counterOne}
        </button>
        <span>{isEven ? "Even" : "odd"}</span>
      </div>
      <div>
        <button onClick={increaseTwo}>
          Counter Two - {counterTwo}
        </button>
      </div>
    </div>
  );
}

export default MemoCoun;
