import { useState } from "react";
import TodoGenerator from './TodoGenerator';

const TodoList = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <TodoGenerator />
        </div>
    );
}



export default TodoList;

