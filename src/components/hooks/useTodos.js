import {useDispatch} from 'react-redux';
import {addTodoTask, deleteTodoTask, getTodoTasks, updateTodoTask} from '../../api/todoApi';
import {resetTodoTask} from '../todoListSlice';

export const useTodos = () => {

    const dispatch = useDispatch();

    async function loadTodos() {
        const response = await getTodoTasks();
        dispatch(resetTodoTask(response.data));
    }

    const addTodo = async (item) => {
        await addTodoTask({
            text: item,
        });
        loadTodos();
    }

    const updateTodo = async (item) => {
        await updateTodoTask(item.id, item);
        loadTodos();
    }

    const deleteTodo = async (id) => {
        await deleteTodoTask(id);
        loadTodos();
    }

    return {
        loadTodos,
        addTodo,
        deleteTodo,
        updateTodo
    }
}