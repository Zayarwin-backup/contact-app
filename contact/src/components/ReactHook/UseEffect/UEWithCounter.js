import React, {
  useState,
  useEffect,
} from "react";

function UEWithCounter() {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updating the component");
    document.title = `You clicked ${count} time`;
  }, [count]);

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <button
        onClick={() =>
          setcount((prev) => prev + 1)
        }
      >
        click {count} times
      </button>
    </div>
  );
}

export default UEWithCounter;
