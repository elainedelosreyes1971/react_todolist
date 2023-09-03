import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import {useTodos} from './hooks/useTodos';

const TodoList = (props) => {

    // const todoList = useSelector(state => state.todoList.todoList);
    const {loadTodos, addTodo} = useTodos();
    const dispatch = useDispatch();
    useEffect(() => {
        loadTodos();
    }, []);

    const addItem = (item) => {
        addTodo(item);
    }

    const removeItem = (index) => {

    }

    return (
        <div className="todoList">
            <TodoGroup onRemoveEvent={removeItem} isDone={props.isDone}/>
            {!props.isDone && <TodoGenerator onAddEvent={addItem}/>}
        </div>
    );
}

export default TodoList;

