import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const TodoItemDetail = () => {
    const { id } = useParams();
    const todoTask = useSelector(state => state.todoList.todoList).find(item => item.id = "");
    return (
        <div className="todo-detail">
            <h1>Todo Item Detail</h1>
            <div>{todoTask.id}</div>
            <div>Name</div>
        </div>
    )
}

export default TodoItemDetail;