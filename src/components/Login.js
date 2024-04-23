import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({username:'',password:''})

  const navigation = useNavigate()

  const handleChange = (event)=>{
    // (event)=>setLoginDetails({...loginDetails,username:event.target.value})

    setLoginDetails({...loginDetails,[event.target.name]:event.target.value})

  }
 
    const loginProcess = ()=>{
      let username = loginDetails.username
      let password = loginDetails.password
      if(username==='admin' && password==='admin'){
             sessionStorage.setItem('role','admin')
             navigation('/home')
      }
      else{
        sessionStorage.setItem('role','guest')
        navigation('/home')
      }
    }
   
      
  return (
    <div>
        <p>
            <input 
             onChange={handleChange} 
             type='text' placeholder='username' name='username'/>
        </p>
        <p>
            <input onChange={handleChange} 
             type='password' placeholder='password' name='password'/>
        </p>
         <button onClick={loginProcess}>Login</button>

         {/* {JSON.stringify(loginDetails)} */}
    </div>
  )
}


/*
{...loginDetails,username:event.target.value}
{username:'admin', password:''}
{...loginDetails,password:event.target.value}
{username:'admin', password:'admin'}
*/