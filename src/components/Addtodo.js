import React, { useState} from 'react'

export const Addtodo = (props) => {
const[title,setTitle]=useState('')
const[desc,setDesc]=useState('')

const submit=(e)=>{
    e.preventDefault();
    if (!title||!desc){
        alert('Title or Desc cannot be empty')
    }
    else{
        props.addTodo(title,desc)
        setDesc('')
        setTitle('')}


}
  return (

    
    <div className='container border border-dark my-3 py-3'>
        <h3 className='text-center'>Add a todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" />
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Description</label>
    <textarea type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
    </div>
  )
}
