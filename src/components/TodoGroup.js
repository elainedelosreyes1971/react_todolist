import {useSelector} from 'react-redux';
import '../App.css';
import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    const itemList = useSelector(state => state.todoList.todoList);

    return (
        <div className="todoGroup">
            {
                itemList.map((item) =>
                    <TodoItem onRemoveEvent={props.onRemoveEvent} item={item}></TodoItem>
                )}
        </div>
    );
}

export default TodoGroup;
