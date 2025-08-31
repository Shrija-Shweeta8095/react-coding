import React, { useLayoutEffect, useState } from 'react'

function ChangeBg() {

    const [color,setColor] =useState("lightblue");

    useLayoutEffect(()=>{
        console.log("useLayoutEffect called");
        document.body.style.backgroundColor=color;
        console.log("useLayoutEffect called2");

    },[color])

  return (
    <div>
      <h2>Current Background:{color}</h2>
      <button onClick={()=>setColor('red')}>Red</button>
      <button onClick={()=>setColor('green')}>Green</button>

    </div>
  )
}

export default ChangeBg
