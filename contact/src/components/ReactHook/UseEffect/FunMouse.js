import React, {
  useState,
  useEffect,
} from "react";

function FunMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseChange = (e) => {
    console.log("mouseChange");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Update the component");
    window.addEventListener(
      "mousemove",
      mouseChange
    );
    return () => {
      window.removeEventListener(
        "mousemove",
        mouseChange
      );
    };
  }, []);

  return (
    <div>
      X - {x} Y - {y}
    </div>
  );
}

export default FunMouse;
