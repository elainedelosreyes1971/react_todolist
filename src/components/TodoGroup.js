import { useSelector } from 'react-redux';
import '../App.css';
import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    //TODO Generate key not needed here you can use index
    const itemList = useSelector(state => state.todoList.todoList);
    const generateKey = (index) => {
        return (Math.random() + index);
    }

    return (
        <div className="todoGroup">
            {
                //TODO Remove other props that are get from item
                itemList.map((item) =>
                    <TodoItem key={item.id} item={item.text} onRemoveEvent={props.onRemoveEvent}></TodoItem>
                )}
        </div>
    );
}

export default TodoGroup;
