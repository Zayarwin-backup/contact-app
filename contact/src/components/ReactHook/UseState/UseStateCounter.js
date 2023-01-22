import React, { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() =>
          setCount((prevCount) => prevCount + 1)
        }
      >
        Click {count}
      </button>
    </div>
  );
}

export default UseStateCounter;
