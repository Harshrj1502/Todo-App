import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
    const {todos }=props
  return (
    <div>
      {todos.map((todo,todoindex)=>{
        return (
            <div>
           <TodoCard key={todoindex} {...props}index={todoindex}><p>{todo}</p></TodoCard>    
           </div>
        )
      })}
    </div>
  )
}

export default TodoList
