import React, { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Value from "./Value";

function Parent() {
  const [age, setAge] = useState(19);
  const [salary, setSalary] = useState(50000);

  const incrementAge = React.useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary =
    React.useCallback(() => {
      setSalary(salary + 10000);
    }, [salary]);

  return (
    <div>
      <Title />
      <Value text='Age' count={age} />
      <Button increaseHandler={incrementAge}>
        IncrementAge
      </Button>
      <Value text='salary' count={salary} />
      <Button increaseHandler={incrementSalary}>
        IncrementSalary
      </Button>
    </div>
  );
}

export default Parent;
