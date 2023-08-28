import { useState } from "react";

import '../App.css';


const TodoGenerator = (props) => {

    const [item, setItem] = useState('');

    const addTodoItem = () => {

        if(!item.match(/[a-z]/i)) {
            alert("No input, please add something!")
        } else{
            props.onInputChange(item);
            setItem("");
        }
 
    }

    return (
        <div className="todoGenerator">
            <input placeholder="Anything in mind?" value={item} onChange={event => setItem(event.target.value)} />
            <br/> 
            <button onClick={addTodoItem}>ADD</button>
        </div>
    )
    
};


export default TodoGenerator;