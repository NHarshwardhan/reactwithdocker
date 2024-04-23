import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

//   useEffect(()=>{
//        console.log('Make an api call')
//   })
  
  // re-render after making any changes in component state

  // render once
//    useEffect(()=>{
//     console.log('Make an api call')
//    },[])

  // re-render ince dependency changes
  useEffect(()=>{
    console.log('Make an api call')
   },[counter])
  
  return (
    <div>
             <h1>Count: {counter}</h1>
             <button onClick={()=>setCounter(counter+1)}>Increment</button>
             <input type='text' onChange={(event)=>setName(event.target.value)}/>

    </div>
  )
}
