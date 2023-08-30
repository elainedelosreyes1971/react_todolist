import '../App.css';
import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    //TODO Generate key not needed here you can use index
    const generateKey = (index) => {
        return (Math.random() + index);
    }

    return (
        <div className="todoGroup">
            {
                //TODO Remove other props that are get from item
                props.itemList.map((item, index) =>
                    <TodoItem key={index} index={index} item={item} onRemoveEvent={props.onRemoveEvent} itemKey={generateKey(index)}></TodoItem>
                )}
        </div>
    );
}

export default TodoGroup;
