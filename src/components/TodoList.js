import {useEffect} from 'react';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import {useTodos} from './hooks/useTodos';

const TodoList = (props) => {

    const {loadTodos} = useTodos();
    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <div className="todoList">
            <TodoGroup isDoneOnly={props.isDoneOnly}/>
            {!props.isDoneOnly && <TodoGenerator/>}
        </div>
    );
}

export default TodoList;

