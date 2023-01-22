import React, {
  useState,
  useEffect,
} from "react";
import useConTitle from "./useConTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);
  useConTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
}

export default DocTitleOne;
