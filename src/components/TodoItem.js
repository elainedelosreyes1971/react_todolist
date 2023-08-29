import { useDispatch } from 'react-redux';
import '../App.css';
import React, { useState } from "react";
import { addTodoItem } from './todoListSlice';

const TodoItem = (props) => {

    const [isChecked, setIsChecked] = useState(true);
    const dispatch = useDispatch();

    const checkKey = () => {
        const result = {
            id: props.itemKey,
            text: props.item,
            done: isChecked,
        };

        if(isChecked){
            console.log(JSON.stringify(result));
            dispatch(addTodoItem(result));
        }
        else {
            console.log(props.itemKey + " " + props.item + " Done: " + isChecked);
        }
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        checkKey();
    };

    const deleteItem = () => {
        console.log(props.itemKey + " " + props.item + " Done: " + isChecked);

    };

    return (
        <div className="todoItem">

        <span id="selectItem" className={!isChecked ? "strikethrough" : ""}  onClick={handleCheckboxChange}> 
            {props.item} 

            <span id="delete" onClick={deleteItem}> ✖ </span>
        </span>

        </div>
    );
}

export default TodoItem;
