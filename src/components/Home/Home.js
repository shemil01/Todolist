import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div style={{background:"red" ,textAlign:'center'}}>
        <h1>Home Component</h1>
        <div >
        <Link to="/Home" >Home</Link>
        <Link to="/login" style={{textDecoration:"none" }}>Login</Link>
        <Link to="/Registration" style={{textDecoration:"none"}}>Registration</Link>
        </div>
    </div>
  )
}

export default Home