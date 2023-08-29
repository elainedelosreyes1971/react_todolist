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
        doneTodoItem: (state, action) => {
            state.todoList.splice(action.payload);
            console.log(action);
        },
    },
});

export const { addTodoItem, doneTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;