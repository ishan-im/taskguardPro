import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import authReducer from '../features/auth/authSlice';

const reducer = {
	auth: authReducer,
	todos: todoReducer,
};

export const store = configureStore({
	reducer
});
