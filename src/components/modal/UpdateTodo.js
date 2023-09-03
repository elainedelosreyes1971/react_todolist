import {useState} from "react";
import {useTodos} from "../hooks/useTodos";

export const UpdateTodo = (props) => {
    const [item, setItem] = useState(props.item.text);
    const {updateTodo} = useTodos();

    const updateItem = (id, input) => {
        if(props.item.text !== input){
            const payload = {
                ...props.item,
                text: input
            }
            updateTodo(payload);
        }
        props.updateModal();
    }

    return (
        <div className="updateModal" style={{
            position: "fixed",
            backgroundColor: "pink",
            padding: "20px",
            zIndex: 9999
        }}>
            <h2> Update To Do: </h2>
            <input type={"text"} style={{
                height: "40px",
                width: "400px",
                margin: "20px"
            }} value={item}
                   onChange={event => setItem(event.target.value)}/>
            <br />
            <button onClick={() => updateItem(props.item.id, item)}> Update </button>
            <button onClick={props.updateModal}> Cancel </button>
        </div>
    )
}