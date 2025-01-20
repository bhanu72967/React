import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [IncrementBy, setIncrementBy] = useState(1);

  const increment = () => {
    setCount(count + IncrementBy);
  };

  const decrement = () => {
    setCount(count - IncrementBy);
  };
  const IncreaseIncrement = () => {
    setIncrementBy(IncrementBy + 1);
  };
  const DecreaseIncrement = () => {
    setIncrementBy(IncrementBy - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>We are Increment By:{IncrementBy}</h1>
      <button onClick={IncreaseIncrement}>IncreaseIncrement</button>
      <button onClick={DecreaseIncrement}>DecreaseIncrement</button>
    </div>
  );
};

export default Counter;
