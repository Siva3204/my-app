import React from "react";
import { useEffect, useState } from "react";

function UseEffect() {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const Interval = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    );
    const Values = (() => setCount((count) => count + 1), 1000);
    return () => clearInterval(Interval, Values);
  }, [count]);

  return (
    <div>
      <h1>Time:{time}</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default UseEffect;
