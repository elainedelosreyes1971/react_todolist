import { useState } from "react";
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

const TodoList = () => {
   
    const [itemList, setItemList] = useState([]);

    return (
        <div>
        <div>Todo List</div>
            <TodoGroup itemList={itemList}/>
            <TodoGenerator onInputChange={(input) => setItemList(itemList.concat(input))}/>
        </div>
    );
}

export default TodoList;

