import React from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import Navbar from './Navbar';

function Todos() {
    return (
        <>
                <Navbar />
				<AddTodo />
				<Todo />
			</>
		);
}

export default Todos