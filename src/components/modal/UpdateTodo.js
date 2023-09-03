import {useState} from "react";
import {useTodos} from "../hooks/useTodos";
import {Button, Divider, Input} from "antd";

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
            borderColor: "10px solid black",
            borderRadius: "10px",
            position: "absolute",
            backgroundColor: "gray",
            padding: "20px",
            zIndex: 2
        }}>
            <h2> Update To Do: </h2>
            <Input type={"text"} style={{
                height: "40px",
                width: "400px",
                margin: "20px",
            }} value={item}
                   onChange={event => setItem(event.target.value)}/>
            <br />
            <Button style={{marginRight: "10px"}} onClick={() => updateItem(props.item.id, item)}> Update </Button>
            <Button onClick={props.updateModal}> Cancel </Button>
        </div>
    )
}