import { useState   } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  const Inc = () => {
    setCount((prev) => prev+1);
  }

  const Dec = () => {
    setCount((prev) => prev-1);
  }



  return (
    <>
      <h1>Counter App</h1>
      <div>Count: {count}</div>

      <div>
        <button onClick={() => Inc()}>Increment</button>
        <button onClick={() => Dec()}>Decrement</button>
      </div>
    </>
  );
}
