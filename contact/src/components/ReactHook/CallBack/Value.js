import React from "react";

function Value({ text, count }) {
  console.log("Rerendering - ", text);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Value);
