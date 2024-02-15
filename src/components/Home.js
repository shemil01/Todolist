import React, { useState } from 'react'



function Home() {
  const [colour,setColour]=useState("red")

const result = async function (){
const data = await fetch("https://dummyjson.com/products")
console.log(data)
const fresult = await data.json()
console.log(fresult)
}
  const clickHandle=()=>{
   result()
  //  console.log(fetch("https://jsonplaceholder.typicode.com/todos/1")) 
//     if(colour==="red"){
//       setColour("black")
//     }else{
// setColour("red")
//     }
setColour(colour==="red"?"black":"red")
    
  } 
  return (
  
    <div className='theme'style={{background:colour,height:"100vh "}} >
      <h1>{colour}</h1>
      <button onClick={clickHandle}>click</button>
    
    </div>
  )
}

export default Home