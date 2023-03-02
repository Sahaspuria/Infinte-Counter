import { useState } from "react";

const Counter = ({ parentCallback, sumCount }) => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(count);
  const [counts, setCounts] = useState(0);
  // ++ $ -- functions
  const Increment = function () {
    setCount(count + 1);
    parentCallback(sumCount + 1);
    setCounts(counts + 1);
  };

  const Decrement = function () {
    setCount(count === 0 ? 0 : count - 1);
    setSum(sum === 0 ? 0 : sum - 1);
    parentCallback(counts <= 0 ? sumCount - 0 : sumCount - 1);
    setCounts(counts - 1);
  };

  return (
    <>
      <h3>{count}</h3>
      <button type="submit" onClick={Increment}>
        Increment
      </button>
      <button type="submit" onClick={Decrement}>
        Decrement
      </button>
    </>
  );
};
export default Counter;
