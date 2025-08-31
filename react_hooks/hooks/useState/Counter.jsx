import React, { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0);

    const increase=()=>{
        setCounter(counter+1);
    }

    const decrease =()=>{
       setCounter(counter-1)
    }
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={increase}>Increase by 1</button>
        <button onClick={decrease}>Decrease by 1</button>

    </div>
  )
}

export default Counter
