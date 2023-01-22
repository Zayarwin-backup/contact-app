import React from "react";

function MemoComp({ name }) {
  console.log("memo Component");
  return <div>Memo Component {name}</div>;
}

export default React.memo(MemoComp);
