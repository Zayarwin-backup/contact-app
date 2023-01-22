import React, { useState } from "react";
import useInput from "./useInput";

function UserInput() {
  const [
    firstName,
    bindFirstName,
    resetFirstName,
  ] = useInput("");
  const [
    secondName,
    bindSecondName,
    resetSecondName,
  ] = useInput("");

  const submitted = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${secondName}`);
    resetFirstName();
    resetSecondName();
  };

  return (
    <div>
      <form onSubmit={submitted}>
        <input
          {...bindFirstName}
          type='text'
        ></input>
        <input
          {...bindSecondName}
          type='text'
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UserInput;
