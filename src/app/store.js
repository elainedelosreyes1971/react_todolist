import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../components/todoListSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer
    }
});

