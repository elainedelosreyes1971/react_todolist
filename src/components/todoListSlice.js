import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoList.push(action.payload);
			//console.log(state.todoList.push(action.payload));
        },
        doneTodoItem: (state, action) => {
            //update
            
            console.log(action);
        },
    },
});

export const { addTodoItem, doneTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;