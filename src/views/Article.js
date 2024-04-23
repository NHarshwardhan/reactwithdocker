import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Article() {
  return (
    <div style={{marginTop:40}}>
          
          <Link to="article1">Article 1</Link>&nbsp;&nbsp;
          <Link to="article2">Article 2</Link>&nbsp;&nbsp;

          {/* Display Nested Route component  */}
          <Outlet/>
    </div>
  )
}
