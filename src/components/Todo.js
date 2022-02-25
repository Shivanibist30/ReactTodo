import React from 'react'
import {TodoItem} from './TodoItem'
export const Todo = (props) => {
  return (
<div className='container border border-dark'>
  <h1 className='text-center'>All Todos</h1>
  {
  props.todo.length===0?<h3 className='text-center bg-light'>'No Notes Availabe'</h3>:
    props.todo.map((todo)=>
  {
    return <TodoItem key={todo.sno} todo={todo} delete={props.onDelete}/>
  }
    )
  }
 
</div>
  )
}
