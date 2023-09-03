import '../App.css';
import {useTodos} from "./hooks/useTodos";
import {CloseOutlined, EditFilled} from "@ant-design/icons";
import {UpdateTodo} from './modal/UpdateTodo';
import {useState} from "react";
import {Divider} from "antd";

const TodoItem = (props) => {
    const {updateTodo, deleteTodo} = useTodos();
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
        const payload = {
            ...props.item,
            done: !props.item.done
        }
        updateTodo(payload);
    };

    const deleteTodoItem = (id) => {
        deleteTodo(id);
    }

    return (
        <Divider>
            {displayUpdateModal()}
            <div className="todoItem">
            <span id="selectItem" className={props.item.done ? "strikethrough" : ""} onClick={handleCheckboxChange}>
                {props.item.text}
            </span>
                {!props.isDoneOnly ?
                    <div style={{position: "relative"}}>
                        <EditFilled style={{float: "right", marginRight: "10px", marginTop: "-20px"}} id="update" key={props.item.id}
                                    onClick={() => updateModal(setUpdateModalInd, updateModalInd)}/>
                        <CloseOutlined style={{float: "right", marginRight: "30px", marginTop: "-20px"}} id="delete" key={props.item.id} onClick={() => deleteTodoItem(props.item.id)}/>
                    </div> : null
                }
            </div>
        </Divider>
    );
}

export default TodoItem;
