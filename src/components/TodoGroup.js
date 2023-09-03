import {useSelector} from 'react-redux';
import '../App.css';
import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    const itemList = useSelector(state => state.todoList.todoList);

    return (
        <div className="todoGroup">
            {
                itemList.filter(item => !props.isDoneOnly || item.done).map((item) =>
                    <TodoItem key={item.id} item={item}></TodoItem>
                )}
        </div>
    );
}

export default TodoGroup;
