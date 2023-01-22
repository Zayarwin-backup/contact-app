import React, {
  useEffect,
  useState,
} from "react";

function TestUseEffect() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <button onClick={addCount}>
        click {count}
      </button>
    </div>
  );
}

export default TestUseEffect;
