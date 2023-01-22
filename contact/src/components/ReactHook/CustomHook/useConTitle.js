import React, { useEffect } from "react";

function useConTitle(count) {
  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);
}

export default useConTitle;
