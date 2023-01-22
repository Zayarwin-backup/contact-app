import React from "react";

function Button({ increaseHandler, children }) {
  console.log("Rerendering - ", children);
  return (
    <div>
      <button onClick={increaseHandler}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
