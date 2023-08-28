import { useState } from "react";
import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           {
                props.itemList.map((item, index) => 
                <TodoItem key={index} item={item}></TodoItem>
           )}
        </div>
    );
}

export default TodoGroup;
