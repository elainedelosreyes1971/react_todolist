import '../App.css';
import {useTodos} from "./hooks/useTodos";

const TodoItem = (props) => {
    const {toggleTodo} = useTodos();

    //TODO need to craete action in redux
    const handleCheckboxChange = () => {
        const item = props.item;
        toggleTodo(item.id, !item.done);
    };

    return (
        <div className="todoItem">
            <span id="selectItem" className={props.item.done ? "strikethrough" : ""} onClick={handleCheckboxChange}>
                {props.item.text}
            </span>
            <span id="delete" key={props.item.id} onClick={() => props.onRemoveEvent(props.item.id)}> ✖ </span>
        </div>
    );
}

export default TodoItem;
