import {useState} from "react";
import '../App.css';
import {Button, Input} from "antd";
import {useTodos} from "./hooks/useTodos";

const TodoGenerator = (props) => {

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
        <div className="todoGenerator" style={{display: "block", alignItems: "center", padding: "20px"}}>
            <Input style={{width: "400px", height: "50px", margin: "5px"}} placeholder="Anything in mind?" value={item} onChange={event => setItem(event.target.value)}/>
            <br/>
            <Button style={{position: "absolute", margin: "25px 0px 250px 85px"}} onClick={addTodoItem}>ADD</Button>
        </div>
    )
};


export default TodoGenerator;