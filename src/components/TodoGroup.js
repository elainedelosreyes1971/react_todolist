import { useState } from "react";
import TodoItem from './TodoItem';
import '../App.css';

const TodoGroup = (props) => {
    return (
        <div className="todoGroup">
           {
                props.itemList.map((item, index) => 
                <TodoItem key={index} item={item}></TodoItem>
           )}
        </div>
    );
}

export default TodoGroup;
