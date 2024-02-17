import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div style={{background:"yellow" ,height:"100vh"}}>
    
      Registration
<input type="text" />
<input type="text" />
<input type="text" />
<input type="text" />
<div>
 <Link to="/Home" ><button>submit</button></Link>
</div>

    </div>
  )
}

export default Registration