import '../App.css';
import React, { useState } from "react";


const TodoItem = (props) => {

    const [isChecked, setIsChecked] = useState(true);

    const checkKey = () => {
        
        const result = {
            id: props.itemKey,
            text: props.item,
            done: isChecked,
        };

        if(isChecked){
            console.log(JSON.stringify(result));
        }
        else {
            console.log(props.itemKey + " " + props.item + " Done: " + isChecked);
        }
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        checkKey();
    };

    return (
        <div className="todoItem">

        <span> <input type="checkbox" onChange={handleCheckboxChange}/> {props.item} </span>
         
        </div>
    );
}

export default TodoItem;
