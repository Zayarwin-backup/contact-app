import React, { useState } from "react";
import FunMouse from "./FunMouse";

function MouseContainer() {
  const [disable, setDisable] = useState(true);
  return (
    <div>
      <button
        onClick={() => setDisable(!disable)}
      >
        DisableMouse
      </button>
      {disable && <FunMouse />}
    </div>
  );
}

export default MouseContainer;
