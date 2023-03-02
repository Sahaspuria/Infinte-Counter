import "./styles.css";
import { useState } from "react";
import Counter from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(count);
  const [value, setValue] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  // const [value, setValue] = useState([]);
  // const [sum, getSum] = useState(0);

  // const Increment = () => {
  //   setState((state) => state + 1);
  //   setValue([...value, state]);
  // };

  // const Decrement = () =>{
  //  if(state<=0){
  //    setState(()=>0)
  //  }
  //  else{
  //    setState((state)=> state - 1)
  //    setValue([...value, state]);
  //    value.pop();
  //  }
  // }
  const handleSum = (childData) => {
    setTotalSum(childData);
  };
  const Increment = function () {
    setCount(count + 1);
    setSum(sum + 1);
    setValue([...value, sum]);
  };

  const Decrement = function () {
    setCount(count === 0 ? 0 : count - 1);
    setSum(sum === 0 ? 0 : sum - 1);
    value.pop();
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{value.length <= 0 ? 0 : totalSum}</h1>
      <h3>{count}</h3>
      <button type="submit" onClick={Increment}>
        Increment
      </button>
      <button type="submit" onClick={Decrement}>
        Decrement
      </button>

      {value?.map((i) => (
        <Counter key={i} parentCallback={handleSum} sumCount={totalSum} />
      ))}
      {/* <Counter parentCallback={handleSum} sumCount={totalSum} /> */}
    </div>
  );
}
