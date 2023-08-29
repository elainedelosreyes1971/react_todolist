import '../App.css';
import TodoItem from './TodoItem';

const TodoGroup = (props) => {

    const generateKey = (index) => {
        return (Math.random() + index);
    }

    return (
        <div className="todoGroup">
            {
                props.itemList.map((item, index) =>
                    <TodoItem key={index} index={index} item={item} onRemoveEvent={props.onRemoveEvent} itemKey={generateKey(index)}></TodoItem>
                )}
        </div>
    );
}

export default TodoGroup;
