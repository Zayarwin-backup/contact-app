import React from "react";
import ReactDom from "react-dom";

function PortalDemo() {
  return ReactDom.createPortal(
    <div>
      <h1>Portal Demo</h1>
    </div>,
    document.getElementById("protal-root")
  );
}

export default PortalDemo;
