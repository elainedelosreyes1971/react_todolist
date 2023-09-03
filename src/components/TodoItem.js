import '../App.css';
import {useTodos} from "./hooks/useTodos";
import {CloseOutlined, EditFilled} from "@ant-design/icons";
import {UpdateTodo} from './modal/UpdateTodo';
import {useState} from "react";

const TodoItem = (props) => {
    const {toggleTodo} = useTodos();
    const [updateModalInd, setUpdateModalInd] = useState(false);

    const displayUpdateModal = () => {
        if (updateModalInd) {
            return <UpdateTodo updateModal={updateModal} item={props.item}/>;
        }
        return null;
    }

    const updateModal = () => {
        setUpdateModalInd(!updateModalInd);
    }

    const handleCheckboxChange = () => {
        const item = props.item;
        toggleTodo(item.id, !item.done);
    };

    return (
        <div>
            {displayUpdateModal()}
            <div className="todoItem">
            <span id="selectItem" className={props.item.done ? "strikethrough" : ""} onClick={handleCheckboxChange}>
                {props.item.text}
            </span>
                <EditFilled style={{float: "right", marginLeft: "5px"}} id="update" key={props.item.id}
                            onClick={() => updateModal(setUpdateModalInd, updateModalInd)}/>
                <CloseOutlined id="delete" key={props.item.id} onClick={() => props.onRemoveEvent(props.item.id)}/>
            </div>
        </div>
    );
}

export default TodoItem;
