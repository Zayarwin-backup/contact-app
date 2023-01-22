import React, {
  useState,
  useEffect,
  useRef,
} from "react";

function UseRefTimer() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <span>Hook Timer - {timer}</span>
      <button
        onClick={() =>
          clearInterval(timerRef.current)
        }
      >
        Stop
      </button>
    </div>
  );
}

export default UseRefTimer;
