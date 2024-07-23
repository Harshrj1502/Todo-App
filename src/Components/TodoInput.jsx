import React, { useState } from "react";

const TodoInput = ({ handleAddTodo,todovalue,setTodovalue }) => {
  
  return (
    <div>
      <input type="text" onChange={(e) => setTodovalue(e.target.value)} placeholder="enter" value={todovalue}/>
      <button
        onClick={() => { 
          handleAddTodo(todovalue);
          setTodovalue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
