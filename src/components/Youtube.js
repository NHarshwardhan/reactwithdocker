import React, { useState } from 'react'

export default function Youtube() {
   
const [message, setMessage] = useState('Please subscribe')
const [counter, setCounter] = useState(0);
const [status, setStatus] = useState(false)


  const changeMessage = ()=>{
       setMessage('Thank you for subscribing')
  }
  const incrementCounter = ()=>{
      setCounter(counter+1)
  }

  const checkRole = ()=>{
      setStatus(!status)
  }
  return (
    <div>
         <h1>{message}</h1>
         <button onClick={changeMessage}>subscribe</button>

         <h1>{counter}</h1>
         <button onClick={incrementCounter}>increment</button>

         <h1>Loggedin User : {status?'Admin':'Guest'}</h1>
         <button onClick={checkRole}>Change Status</button>
    </div>
  )
}
