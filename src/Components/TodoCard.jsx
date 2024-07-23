import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const TodoCard = (props ) => {
    const {children,handleDeleteTodo,index,handleEditTodo} =props
  return (
    <div>
      <ul>
        {children}
        <CiEdit onClick={()=>handleEditTodo(index)}/>
        <MdDelete onClick={()=>handleDeleteTodo(index)} />
      </ul>
    </div>
  );
};

export default TodoCard;
