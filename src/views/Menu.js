import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Menu() {
    // const admin = sessionStorage.getItem('role') === 'admin'?true:false

    const [isadmin , setisAdmin] = useState('')

    const result =   useLocation()
    console.log(result)
     const navigation = useNavigate()
     
   useEffect(()=>{
      let role = sessionStorage.getItem('role')
      setisAdmin(role)
   },[result.pathname])
    
   const logout = ()=>{
         sessionStorage.removeItem('role')
         alert('logout successfully')
         navigation('/login')
   }
  return (
    <div>

          {
            isadmin ==='admin'?
              <>
                <Link to="/home">Home</Link>&nbsp;&nbsp;
                                <Link to="/about">About</Link>&nbsp;&nbsp;
                                <Link to="/products">Products</Link>&nbsp;&nbsp;             

                        
                                <Link to="/product/create">Add Product</Link>&nbsp;&nbsp;
                                <Link to="/product/edit">Modify Product</Link>&nbsp;&nbsp;
                                <Link to="/article">Article</Link>&nbsp;&nbsp;
                                <button onClick={logout}>Logout</button>
                                
            
            </>:
            isadmin ==='guest'?
               <>
                                  <Link to="/home">Home</Link>&nbsp;&nbsp;
                                <Link to="/about">About</Link>&nbsp;&nbsp;
                                <Link to="/products">Products</Link>&nbsp;&nbsp;   
                                <button onClick={logout}>Logout</button>
               </>

            :
                   <Link to="/login">Login</Link>
          }
          
          

    </div>
  )
}
