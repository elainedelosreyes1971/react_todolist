import { useState } from "react";

const onInputChange = (event) => {
    console.log(event.target.value);
}

const TodoGenerator = () => {

    return (
        <div>
            <input type="text" onChange={onInputChange}> </input>
            <button></button>
        </div>
    )
    
};


export default TodoGenerator;