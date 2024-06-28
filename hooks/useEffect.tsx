import { useEffect, useState } from "react";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  // Usamos o useEffect quando algo de fato mudar
  useEffect(() => {
    const fetchResouseType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
      const responseJson = await response.json();
      setItems(responseJson)
    };
    fetchResouseType();
  },[resourceType]);
  
  useEffect(() => {
    // ComponentDidMount
    console.log("componentDidMount")
    return () => {
      // ComponentWillUnMount
      console.log("componentWillUnMount")
    }
  },[])
  const changeResourceType = (resourceType:any) => {
    setResourceType(resourceType);
  };


  return ( 

    <div className="flex flex-col w-[300px] items-center gap-4">
      <h1 className="font-bold text-2xl">{resourceType}</h1>
      <div className="flex items-center justify-center gap-2">
        <button className="px-3 py-2 border-0 bg-slate-800 text-white rounded-md font-bold" onClick={() => changeResourceType("posts")}>Posts</button>
        <button className="px-3 py-2 border-0 bg-slate-800 text-white rounded-md font-bold" onClick={() => changeResourceType("comments")}>Comments</button>
        <button className="px-3 py-2 border-0 bg-slate-800 text-white rounded-md font-bold" onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
   );
}
 
export default UseEffect;