import { useState } from "react";


const TodoGenerator = () => {

    const onInputChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <input type="text" /> 
            <button type="button">ADD</button>
        </div>
    )
    
};


export default TodoGenerator;