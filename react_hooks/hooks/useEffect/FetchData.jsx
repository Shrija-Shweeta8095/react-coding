import React, { useEffect, useState } from 'react'

function FetchData() {
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        console.log("useEffect called");
        document.title = counter;
    },[counter]);

  return (
    <div>
      <h1>Counter={counter}</h1>
      <button onClick={()=>setCounter(counter+1)}> Increase by 1</button>
      <button onClick={()=>setCounter(counter-1)}> Decrease by 1</button>

    </div>
  )
}

export default FetchData
