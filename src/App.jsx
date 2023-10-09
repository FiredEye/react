import { useEffect, useState } from "react"
import Child from "./pages/Child";

function App() {
  const [add,setAdd]=useState(0);
  const [sub,setSub]=useState(100);
  let value="Hi! there"
  useEffect(()=>{console.log(`after effect activated ${add}, ${sub}`)},[add,sub])
  return (
    <> 
    <h1 className="text-orange-400 text-center text-[40px]">React hooks:</h1>

    <div className="ps-8 pt-8">
    <h1 className="text-purple-500 text-[30px]">useState:</h1>
    <p>Press the button to increase the number</p> <b>{add}</b> <button className="px-4 py-2 bg-green-500 text-white rounded ms-3" onClick={()=>{setAdd(prev=>prev+1)}}>increment</button><br />
    
    <p>Press the button to decrease the number</p> <b>{sub}</b> <button className="px-4 py-2 bg-red-500 text-white rounded ms-3" onClick={()=>{setSub(prev=>prev-1)}}>decrement</button>
    </div>
    <div className="ps-8 pt-8">
    <h1 className="text-purple-500 text-[30px]">sending Props in children component:</h1>
    <p>Using value:"{value}" in parent component</p> <br />
    {/* sending props(value) to children component */}
    <Child value={value}/>
    </div>
    </>
  )
}

export default App
