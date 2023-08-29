import TodoItem from './TodoItem';
import '../App.css';

const TodoGroup = (props) => {

    const generateKey = (index) => {
        return (Math.random() + index);
    }
    
    return (
        <div className="todoGroup">
           {
                props.itemList.map((item, index) => 
                <TodoItem key={index} index={index} item={item} itemKey={generateKey(index)}></TodoItem>
                
           )}
        </div>
    );
}

export default TodoGroup;
