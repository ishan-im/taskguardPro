import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage, saveStateToLocalStorage, loadTokenFromLocalStorage } from "../../utils/localStorage";


// const initialState = () => loadStateFromLocalStorage();

	


export const todoSlice = createSlice({
	name: 'todo',
	initialState: loadStateFromLocalStorage(),
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload.text,
				done: false,
			};
			state.todos.push(todo);
			saveStateToLocalStorage(state);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			saveStateToLocalStorage(state);
		},
		updateTodos: (state, action) => {
			const { id, text } = action.payload;
			const todoToUpdate = state.todos.find((todo) => todo.id === id);

			if (todoToUpdate) {
				todoToUpdate.text = text;
				saveStateToLocalStorage(state);
			}
		},
		completeTodo: (state, action) => {
			const { id } = action.payload;
			const todoToUpdate = state.todos.find((todo) => todo.id === id);

			if (todoToUpdate) {
				todoToUpdate.done = !todoToUpdate.done;
				saveStateToLocalStorage(state);
			}
		},
		clearTodos: (state) => {
			state.todos = [];
			saveStateToLocalStorage(state);
		},
		setTodo(state, action) {
			state.todos = action.payload;
		},
	},
});


export const { addTodo, removeTodo, updateTodos, completeTodo, clearTodos, setTodo} = todoSlice.actions

export default todoSlice.reducer