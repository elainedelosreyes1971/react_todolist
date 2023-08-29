import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodoItem: (state, action) => {

			console.log(action);
        },
        doneTodoItem: (state, action) => {
            //update
            
            console.log(action);
        },
    },
});

export const { addTodoItem, doneTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;