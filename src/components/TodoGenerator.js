import {useState} from "react";
import '../App.css';
import {Button} from "antd";
import {useTodos} from "./hooks/useTodos";

const TodoGenerator = () => {

    const [item, setItem] = useState('');
    const {addTodo} = useTodos();
    const addTodoItem = () => {
        const itemTrim = item.trim();

        if (itemTrim === "") {
            alert("No input, please add something!")
        } else {
            addTodo(itemTrim);
            setItem("");
        }
    }
    return (
        <div className="todoGenerator">
            <input placeholder="Anything in mind?" value={item} onChange={event => setItem(event.target.value)}/>
            <br/>
            <Button onClick={addTodoItem}>ADD</Button>
        </div>
    )
};


export default TodoGenerator;