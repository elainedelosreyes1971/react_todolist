import { useState } from "react";
import '../App.css';


const TodoGenerator = (props) => {

    const [item, setItem] = useState('');
    const addTodoItem = () => {
        const itemTrim = item.trim();

        if (itemTrim === "") {
            alert("No input, please add something!")
        } else {
            props.onAddEvent(itemTrim);
            setItem("");
        }
    }
    return (
        <div className="todoGenerator">
            <input placeholder="Anything in mind?" value={item} onChange={event => setItem(event.target.value)} />
            <br />
            <button onClick={addTodoItem}>ADD</button>
        </div>
    )
};


export default TodoGenerator;