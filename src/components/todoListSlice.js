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
        removeTodoItem: (state, action) => {
            state.todoList.splice(action.payload, 1);
        },
    },
});

export const { addTodoItem, removeTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;