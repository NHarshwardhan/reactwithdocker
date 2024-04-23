import React, { useEffect, useRef } from 'react'

export default function UseRefDemo() {

    // access the dom element here
    const inputRef = useRef()

 

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    
    return (
    <div>


         <input ref={inputRef} type='text' style={{margin:30}}/>
      

    </div>
  )
}
