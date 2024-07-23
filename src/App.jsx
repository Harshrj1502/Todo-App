import React, { useEffect, useState } from "react";
import TodoCard from "./Components/TodoCard";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";

const App = () => {
  const [todos, setTodos] = useState([
    "harsh"
  ]);
  const [todovalue, setTodovalue] = useState("");

  function persistdata(newlist){
    localStorage.setItem('todos',JSON.stringify({todos:newlist}))
  }

  function handleAddTodo(newtodos){
    const newtodolist =[...todos,newtodos]
    persistdata(newtodolist)
    setTodos(newtodolist)
    
  }
  function handleDeleteTodo(index){
    const newtodolist =todos.filter((todo,todoIndex)=>{
      return todoIndex!=index
    })
    persistdata(newtodolist)
    setTodos(newtodolist)
  }
  function handleEditTodo(index){
    const valueEdited=todos[index]
    setTodovalue(valueEdited)
    handleDeleteTodo(index)
  }
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localtodos=localStorage.getItem('todos')
    if(!localtodos){
      return
    }
    localtodos=JSON.parse(localtodos).todos
    setTodos(localtodos)
  },[])
  return (
    <>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
      <TodoInput todovalue={todovalue} setTodovalue={setTodovalue} handleAddTodo={handleAddTodo} 
       />
    </>
  );
};

export default App;
