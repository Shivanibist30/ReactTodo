import React from 'react'

export const TodoItem = (props) => {
  return (
    <div className='bg-light px-3'>
    <h2>{props.todo.title}</h2>
    <p>{props.todo.desc}</p>
    <button className='btn btn-danger btn-sm' onClick={()=>props.delete(props.todo)}>Delete</button>
    <hr/>
    </div>
  )
}
