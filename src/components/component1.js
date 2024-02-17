import React, { useContext } from 'react'
import { userContext } from './usecontext'

const Component1 = () => {
const {counter , setCounter} =    useContext(userContext)
  return (
    <div>
      <button onClick={()=>setCounter(counter +1)}>click{counter}</button>  
    </div>
  )
}

export default Component1