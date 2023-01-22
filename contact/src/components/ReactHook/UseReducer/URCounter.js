import React, { useReducer } from "react";

const intitalState = 0;

const reducer = (state, action) => {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return intitalState;
  }
};
function URCounter() {
  const [count, dispatch] = useReducer(
    reducer,
    intitalState
  );
  return (
    <div>
      Count - {count}
      <button
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
      <button onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default URCounter;
