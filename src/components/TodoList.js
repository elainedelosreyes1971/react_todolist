import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import {addTodoItem, removeTodoItem} from './todoListSlice'
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
   
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
            <TodoGroup itemList={todoList} onRemoveEvent={removeItem}/>
            <TodoGenerator onAddEvent={addItem}/>
        </div>
    );
}

export default TodoList;

