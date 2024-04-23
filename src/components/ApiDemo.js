import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ApiDemo() {

  const [product , setProduct] = useState()

  useEffect(()=>{
        //Making an api call
        axios.get('https://dummyjson.com/products') 
             .then((response)=>{
                   console.log(response.data)
                   setProduct(response.data.products)
             })
             .catch((error)=>{
                      console.log(error)
             })
  },[])

  return (
    <div style={{marginTop:30}}>
             
           <table border={1}>
               <thead>
                   <tr>
                        <th>Id</th>
                        <th>Picture</th>
                        <th>Title</th>
                   </tr>
               </thead>
               <tbody>
                    {
                        product?product.map((p,index)=>(
                               <tr>
                                    <td>
                                        {/* <Link to={`/product/details/${p.id}`}>{p.id}</Link> */}
                                        <Link to='/product/details' state={{id:p.id}}>{p.id}</Link>

                                    </td>

                                  <td>
                                      <img src={p.thumbnail} alt='' width={80} height={80}/>
                                  </td>
                                  <td>{p.title}</td>
                               </tr>
                        )):
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    }
               </tbody>
           </table>

    </div>
  )
}
