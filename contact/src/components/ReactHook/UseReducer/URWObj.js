import React from "react";
import { useReducer } from "react";

const intitalState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + 1,
      };
    case "decrement":
      return {
        ...state,
        firstCounter: state.firstCounter - 1,
      };
    case "increment 5":
      return {
        ...state,
        firstCounter: state.firstCounter + 5,
      };
    case "decrement 5":
      return {
        ...state,
        firstCounter: state.firstCounter - 5,
      };
    case "reset":
      return intitalState;
    case "secondCounterInc":
      return {
        ...state,
        secondCounter: state.secondCounter + 1,
      };
    case "secondCounterDec":
      return {
        ...state,
        secondCounter: state.secondCounter - 1,
      };
    default:
      return state;
  }
};

function URWObj() {
  const [count, dispatch] = useReducer(
    reducer,
    intitalState
  );
  return (
    <div>
      <div>{count.firstCounter}</div>
      <div>{count.secondCounter}</div>
      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrement" })
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          dispatch({ type: "increment 5" })
        }
      >
        Increment 5
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrement 5" })
        }
      >
        Decrement 5
      </button>
      <button
        onClick={() =>
          dispatch({ type: "reset" })
        }
      >
        Reset
      </button>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "secondCounterInc" })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({ type: "secondCounterDec" })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default URWObj;
