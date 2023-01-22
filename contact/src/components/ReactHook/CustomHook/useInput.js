import { useState } from "react";

function useInput(intitalValue) {
  const [name, setName] = useState(intitalValue);

  const reset = () => {
    setName(intitalValue);
  };
  const bind = {
    name,
    onChange: (e) => {
      setName(e.target.value);
    },
  };

  return [name, bind, reset];
}

export default useInput;
