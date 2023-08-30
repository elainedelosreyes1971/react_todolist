import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import { addTodoItem, removeTodoItem } from './todoListSlice';

const TodoList = (props) => {

    const todoList = useSelector(state => state.todoList.todoList);
    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(addTodoItem(item));
    }

    const removeItem = (index) => {
        dispatch(removeTodoItem(index));
    }

    return (
        <div className="todoList">
            <TodoGroup itemList={todoList} onRemoveEvent={removeItem} isDone={props.isDone}/>
            {!props.isDone && <TodoGenerator onAddEvent={addItem} />}
        </div>
    );
}

export default TodoList;

