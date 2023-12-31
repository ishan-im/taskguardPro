import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoList from './TodoList'
import { setTodo } from '../features/todo/todoSlice'
import { loadStateFromLocalStorage } from '../utils/localStorage'

function Todo() {

	const dispatch = useDispatch()

	const [todos, setTodos] = useState([])

	useEffect(() => {
		const state = loadStateFromLocalStorage()
		if (state) {
			setTodos(state.todos)
			dispatch(setTodo(state.todos))
		}
	}, [])
	
	const todo = useSelector((state) => state.todos.todos)

  

  return (
		<>
		
			<div className='bg-black h-screen overflow-y-scroll overflow-x-hidden sm:overflow-x-visible'>
				<div className='flex flex-col items-center relative mx-auto mt-[45px]  w-full sm:w-3/6 justify-center'>
					<div className='overflow-x-hidden overflow-y-hidden flex flex-col items-center'>
						{todo.length > 0 ? (
							todo.map((toDo) => (
								<TodoList id={toDo.id} text={toDo.text} done={toDo.done} />
							))
						) : (
							<p className='bg-transparent text-[18px] text-[#A68DFF] font-[600]'>
								No Todo's Found
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Todo