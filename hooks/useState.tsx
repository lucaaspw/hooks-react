import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }
  return ( 
    <div className="flex flex-col items-center w-[300px] gap-3">
      <h1 className="font-bold text-2xl">{count}</h1>
      <button onClick={handleIncrement} className="px-3 py-2 border-0 bg-slate-800 text-white rounded-md font-bold">Increment</button>
    </div>
   );
}
 
export default UseState;