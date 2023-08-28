import { useState } from "react";


const TodoGenerator = ({onInputChange, onSubmitValue}) => {
    return (
        <div>
            <input type="text" onChange={onInputChange}/> 
            <button type="button" onClick={onSubmitValue}>ADD</button>
        </div>
    )
    
};


export default TodoGenerator;