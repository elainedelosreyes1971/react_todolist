import { useState } from "react";
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

const TodoList = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <TodoGenerator />
              <TodoGroup />
        </div>
    );
}



export default TodoList;

