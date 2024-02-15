import React, { useState } from 'react'

export const AddTask = ({addTask}) => {
  const [value,setValue] =useState("")

const addChange=()=>{
  
if(value!==""){addTask(value)
setValue("")}
}
  return (
    <>
    <div className='input-container'>
        <input type='text'
        className='input' 
        placeholder='Add A Task'
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        />
        <button onClick={addChange} className='add-btn'>ADD</button>
       
    </div>
    </>
  )
}
