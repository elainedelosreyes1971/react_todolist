import { useState } from "react";


const TodoGenerator = (props) => {

    const [item, setItem] = useState('');

    const addTodoItem = (event) => {
        props.onInputChange(item);
    }

    return (
        <div>
            <input onChange={event => setItem(event.target.value)}/>
            <button onClick={addTodoItem}>add</button>
        </div>
    )
    
};


export default TodoGenerator;