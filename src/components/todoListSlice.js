import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoList.push(action.payload);
        },
        //TODO you can use filter in removing the todoItem
        removeTodoItem: (state, action) => {
            state.todoList.splice(action.payload, 1);
        },
        //TODO Add action for toggling item
    },
});

export const { addTodoItem, removeTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;