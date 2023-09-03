import { useState } from "react";
import '../App.css';
import * as todoApi from '../api/todoApi';

const TodoItem = (props) => {

    const [isChecked, setIsChecked] = useState(true);

    //TODO need to craete action in redux
    const handleCheckboxChange = async () => {
        await todoApi.updateTodoTask(props.index, { done: !isChecked });
        setIsChecked(!isChecked);
    };

    return (
        <div className="todoItem">
            <span id="selectItem" className={!isChecked ? "strikethrough" : ""} onClick={handleCheckboxChange}>
                {props.item}
                <span id="delete" key={props.item.id} onClick={() => props.onRemoveEvent(props.index)}> ✖ </span>
            </span>
        </div>
    );
}

export default TodoItem;
