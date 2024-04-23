import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UpdateProduct() {
    const [id , setId] = useState()
    const [baseurl , setBaseUrl] = useState(process.env.base_url)
    const [product , setProduct] = useState({title:'',description:''})
   const [show , setShow] = useState(false)
   const navigation = useNavigate()
  

    const searchProductById = ()=>{
           //Making an api call
        axios.get('https://dummyjson.com/products/'+id) 
        .then((response)=>{
              console.log(response.data)
              setProduct(response.data)
              setShow(true)
        })
        .catch((error)=>{
                 console.log(error)
        })
        
    }
    const [newProduct, setNewProduct] = useState({title:'', description:'',thumbnail:''})  

    const handleChange = (event)=>{
      // (event)=>setLoginDetails({...loginDetails,username:event.target.value})
  
      setNewProduct({...newProduct,[event.target.name]:event.target.value})
  
    }
    const updateProduct = ()=>{
        axios.put(
            "https://dummyjson.com/products/"+id,
            newProduct

        )
        .then(response=>{
                 console.log(response.data)
                 alert('Record updated successfully')
                 navigation('/products')

        })
        .catch(error=>{
                console.log(error)  
        }) 
    }
    const deleteProduct = ()=>{
        if(window.confirm('Are you sure to delete?')){
            axios.delete(
                "https://dummyjson.com/products/"+id,
            )
            .then(response=>{
                
                     console.log(response.data)
                     alert('deleted Successfully')
                     navigation('/products')
            })
            .catch(error=>{
                    console.log(error)  
            }) 
        }
    }
    return (
    <div>
        {/* Searching section */}
        {baseurl}
             <p>
                 <input type='text' 
                 placeholder='type id to search' 
                 onChange={(event)=>setId(event.target.value)}/>

                 <button onClick={searchProductById}>search</button>
             </p>
            
            {
                 show? <>
                 {/* Update section */}
                        <h1>Update product No : {id}</h1>
                    
                    <p>
                        <input 
                        onChange={handleChange} 
                        defaultValue={product.title}
                        type='text' placeholder='title' name='title'/>
                    </p>
                    <p>
                        <input onChange={handleChange} 
                        defaultValue={product.description}
                        type='text' placeholder='description' name='description'/>
                    </p>
                    
                    <button onClick={updateProduct}>Update</button>
                    <button onClick={deleteProduct}>Delete</button>
               </>:null
            }
          
    </div>
  )
}
