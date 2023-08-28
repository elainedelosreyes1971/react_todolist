import { useState } from "react";

const TodoItem = (props) => {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <h1>{props.item}</h1>
        </div>
    );
}

export default TodoItem;
