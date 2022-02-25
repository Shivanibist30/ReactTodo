import Navbar from './components/Navbar';
import './App.css';
import { Todo } from './components/Todo';
import { useState,useEffect } from 'react';
import { Footer } from './components/footer';
import { Addtodo } from './components/Addtodo';

function App() {
  let initTodo;
  if (localStorage.getItem('todos')===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem('todos'))
  }

  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{sno=todos[todos.length-1].sno+1}
    const newTodo={sno:sno,title:title,desc:desc}
    setTodos([...todos,newTodo])
   
    
  }
  const onDelete=(todo)=>{ 
    setTodos(todos.filter((e)=>{return e!==todo}
    ))
    localStorage.getItem('todos')
    }
  const [todos,setTodos]=useState(initTodo)
  useEffect(()=>{ localStorage.setItem('todos',JSON.stringify(todos))},[todos])
   
  return (
    <div className="App">
      <Navbar/>
      <Addtodo addTodo={addTodo}/>
      <Todo todo={todos} onDelete={onDelete} />
      <Footer/>
    </div>
  );
}

export default App;