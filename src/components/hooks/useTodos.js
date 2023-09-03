import { useDispatch } from 'react-redux';
import {getTodoTasks, updateTodoTask, deleteTodoTask, addTodoTask} from '../../api/todoApi';
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

    const toggleTodo = async (id, task) => {
        console.log(task);
        await updateTodoTask(id, {
            done: task,
        });
        loadTodos();
    }

    const deleteTodo = async (id) => {
        await deleteTodoTask(id);
        loadTodos();
    }

    return {
        loadTodos,
        addTodo,
        toggleTodo,
        deleteTodo
    }
}