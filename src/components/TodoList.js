import { useState } from "react";
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

const TodoList = () => {
   
    const [itemList, setItemList] = useState([]);

    return (
        <div className="todoList">
            <TodoGroup itemList={itemList}/>
            <TodoGenerator onInputChange={(input) => 
                setItemList(itemList.concat(input))}/>
        </div>
    );
}

export default TodoList;

