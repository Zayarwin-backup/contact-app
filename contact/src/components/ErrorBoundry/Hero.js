import React from "react";

function Hero(props) {
  if (props.heroname === "Jocker") {
    throw new Error("Not a hero!");
  }
  return <div>{props.heroname}</div>;
}

export default Hero;
