import { useEffect, useRef, useState } from "react";

const UseRef = () => {

  const [name, setName] = useState("");
  const renders = useRef(0);
  const inputRef = useRef();
  const previosName = useRef();
  useEffect(() => {
    renders.current = renders.current + 1;
  });
  const focusInput = () => {
    inputRef.current.focus();
  }
  useEffect(() => {
    previosName.current = name;
  }, [name])
  return (
    <div>
      <div>
        <input ref={inputRef} type="text" className="bg-slate-200 rounded-md px-1 py-1" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={focusInput} className="bg-rose-500 text-white rounded-md font-bold px-3 py-1 ml-2">Focus Input</button>
      </div>
      <p>Hello! My name is {name}</p>
      <p>And my name was {previosName.current}</p>
      <p>{renders.current}</p>
    </div>
  );
}

export default UseRef;