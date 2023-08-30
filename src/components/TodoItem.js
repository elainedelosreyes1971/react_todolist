import { useState } from "react";
import '../App.css';

const TodoItem = (props) => {

    const [isChecked, setIsChecked] = useState(true);

    //TODO need to craete action in redux
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="todoItem">
            <span id="selectItem" className={!isChecked ? "strikethrough" : ""} onClick={handleCheckboxChange}>
                {props.item}
                <span id="delete" key={props.index} onClick={() => props.onRemoveEvent(props.index)}> ✖ </span>
            </span>
        </div>
    );
}

export default TodoItem;
