import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import {useTodos} from './hooks/useTodos';

const TodoList = (props) => {

    const {loadTodos, addTodo, deleteTodo} = useTodos();
    const dispatch = useDispatch();
    useEffect(() => {
        loadTodos();
    }, []);

    const addItem = (item) => {
        addTodo(item);
    }

    const removeItem = (index) => {
        deleteTodo(index);
    }

    return (
        <div className="todoList">
            <TodoGroup onRemoveEvent={removeItem} isDoneOnly={props.isDoneOnly}/>
            {!props.isDoneOnly && <TodoGenerator onAddEvent={addItem}/>}
        </div>
    );
}

export default TodoList;

