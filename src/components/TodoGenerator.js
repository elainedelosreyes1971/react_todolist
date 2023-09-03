import { useState } from "react";
import '../App.css';
import { Button } from "antd";

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
        console.log(itemTrim);
    }
    return (
        <div className="todoGenerator">
            <input placeholder="Anything in mind?" value={item} onChange={event => setItem(event.target.value)} />
            <br />
            <Button onClick={addTodoItem}>ADD</Button>
        </div>
    )
};


export default TodoGenerator;