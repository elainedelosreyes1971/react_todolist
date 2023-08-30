import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import { addTodoItem, removeTodoItem } from './todoListSlice';
import axios from 'axios';

const TodoList = (props) => {

    const api = axios.create({
        baseURL: 'https://64ee17e31f87218271424d11.mockapi.io/api/v1/'
    });
    api.get('/todos').then(response => console.log(response));
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

