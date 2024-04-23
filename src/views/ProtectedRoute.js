import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({Component}) {

const navigation =  useNavigate()
   useEffect(()=>{
                 if(!sessionStorage.getItem('role')){
                             navigation('/login')
                 }
    },[])
  return (
    <Component/>
  )
}
