import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProductWithApi() {
  
  //Navigating from one component to another component programmatically
  const navigation = useNavigate()

  const [newProduct, setNewProduct] = useState({title:'', description:'',thumbnail:''})  

  const handleChange = (event)=>{
    // (event)=>setLoginDetails({...loginDetails,username:event.target.value})

    setNewProduct({...newProduct,[event.target.name]:event.target.value})

  }
  const addProduct = ()=>{
            axios.post(
                "https://dummyjson.com/products/add",
                newProduct

            )
            .then(response=>{
                     console.log(response.data)
                     alert('Record inserted successfully')
                     navigation('/products')
            })
            .catch(error=>{
                    console.log(error)  
            }) 
  }
  return (
    <div>

         <h1>Adding product</h1>
      
        <p>
            <input 
             onChange={handleChange} 
             type='text' placeholder='title' name='title'/>
        </p>
        <p>
            <input onChange={handleChange} 
             type='text' placeholder='description' name='description'/>
        </p>
        <p>
            <input onChange={handleChange} 
             type='text' placeholder='thumbnail' name='thumbnail'/>
        </p>
         <button onClick={addProduct}>Add</button>


    </div>
  )
}
