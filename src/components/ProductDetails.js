import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function ProductDetails() {
    
  const [product , setProduct] = useState()
  //Obtain the router parameter id
  const {id} = useParams()

//   Access data from state
 const {state} =  useLocation()

  useEffect(()=>{
        axios.get('https://dummyjson.com/products/'+state.id) 
        .then((response)=>{
            console.log(response.data)    
            setProduct(response.data)      
        })
        .catch((error)=>{
                console.log(error)
        })
    
  },[])

  return (
    <div style={{marginTop:30}}>
          <table border={2}>
               <tbody>
                   <tr>
                       <th>Title</th>
                       <td>{product?.title}</td>
                   </tr>
                   <tr>
                       <th>Description</th>
                       <td>{product?.description}</td>
                   </tr>
                   <tr>
                       <th>Price</th>
                       <td>{product?.price}</td>  
                   </tr>
                   
               </tbody>
          </table>
    </div>
  )
}
