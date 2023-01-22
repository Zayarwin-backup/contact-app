import React from "react";

function Title() {
  console.log("Rerendering - Title");
  return <div>use callBack</div>;
}

export default React.memo(Title);
