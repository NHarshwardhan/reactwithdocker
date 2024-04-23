import React from 'react'

import { BrowserRouter, Navigate,  Route, Routes } from 'react-router-dom'
import Menu from './views/Menu'
import Home from './views/Home'
import About from './views/About'
import ViewNotFound from './views/ViewNotFound'
import ApiDemo from './components/ApiDemo'
import AddProductWithApi from './components/AddProductWithApi'
import UpdateProduct from './components/UpdateProduct'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'

import Article from './views/Article'
import Article1 from './views/NestedRoute/Article1'
import Article2 from './views/NestedRoute/Article2'
import ProtectedRoute from './views/ProtectedRoute'

export default function App() {
  
  return (
   <>
    <BrowserRouter>
       <Menu/>
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
            <Route path="/home" element={<Home/>} />
          
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<ProtectedRoute Component={ApiDemo} />} />
            <Route path="/product/create" element={<AddProductWithApi/>} />
            <Route path="/product/edit" element={<UpdateProduct/>} />
            {/* <Route path="/product/details/:id" element={<ProductDetails/>} /> */}
            <Route path="/product/details" element={<ProductDetails/>} />
            <Route path="/article" element={<Article/>} >
                 <Route path='' element={<Navigate to="article1"/>}/>  
                 <Route path='article1' element={<Article1/>}/>  
                 <Route path='article2' element={<Article2/>}/>  
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<ViewNotFound/>} />
        </Routes>
    </BrowserRouter>
    
   </>
  )
}
