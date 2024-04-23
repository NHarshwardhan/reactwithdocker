import React from 'react'

export default function Person(props) {

  let {fname,surname,age,isAdmin} = props.personInfo
  return (
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
    personInfo:{
         fname:'Rose',
         surname: 'Dawson',
         age: 34,
         isAdmin: true
    }
 }


*/