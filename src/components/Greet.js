import React from 'react'

export default function Greet({fname,surname,age,isAdmin} ) {

// let{fname,surname,age,isAdmin} = props

  return (
    // <div>
    //      Welcome 
    //      {props.fname} 
    //      {props.surname}
    //      {props.age}
    //      {props.isAdmin ? 'Admin':'Guest'}
    // </div>
    <div>
         Welcome 
         {fname} 
         {surname}
         {age}
         {isAdmin ? 'Admin':'Guest'}
    </div>
  )
}

/*
 props:{
  name:peter
 }
*/