import {createSlice} from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        resetTodoTask: (state, action) => {
            state.todoList = action.payload;
        },
    }
});

export const {resetTodoTask} = todoListSlice.actions;
export default todoListSlice.reducer;