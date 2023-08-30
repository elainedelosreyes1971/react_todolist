import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import { addTodoItem, removeTodoItem } from './todoListSlice';
import { useEffect } from 'react';
import * as todoApi from '../api/todoApi';
import resetTodoTask from './todoListSlice';

const TodoList = (props) => {

    const todoList = useSelector(state => state.todoList.todoList);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data));
        }
        fetchData();
    }, []);

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

