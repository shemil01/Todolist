import React from 'react'

const ListTask = ({tasks,index,removeTask}) => {

    
  return (
    <>
    <div className='taskname'>
        {tasks.title}
        <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
    </div>
    </>
  )
}

export default ListTask