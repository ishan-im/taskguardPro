import React, { useRef, useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateTodos } from '../features/todo/todoSlice';

const Modal = ({ isOpen, setIsOpen, id,text }) => {
	const modalRef = useRef();

	const closeModal = () => {
		setIsOpen(false);
	};

	const dispatch = useDispatch();

	const [updatedText, setUpdatedText] = useState(text);

const todoToUpdate = useSelector((state) =>
	state.todos.todos.find((todo) => todo.id === id)
	);
	
	 useEffect(() => {
			// Update local state if the todo is updated in the store
			if (todoToUpdate) {
				setUpdatedText(todoToUpdate.text);
			}
		}, [todoToUpdate]);


	const updateTodoHandler = () => {
		if (updatedText.length === 0) return;
		console.log(updatedText,id);
		dispatch(updateTodos({ id, text: updatedText }));
		closeModal();
    };
    
    


	return (
		<>
			{isOpen ? (
				<div>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none'>
								<div
									className={`MainFrame w-[416px] h-[200px] p-[30px] bg-zinc-900 rounded-[30px] flex-col justify-start items-start gap-[30px] inline-flex`}>
									<div className='SegmentedControl self-stretch p-0.5 bg-zinc-500 bg-opacity-25 rounded-[20px] justify-center items-center inline-flex'>
										<input
											className='  rounded-[15px] p-[16px] w-[335px] text-white bg-[#000000] opacity-30 border-[1px] border-opacity-60  inset-0 z-10 placeholder:text-white   sm:rounded-[15px] sm:w-[415px] sm:text-white sm:bg-[#000000] sm:opacity-30 sm:border-[1px] sm:border-opacity-60  sm:inset-0 sm:z-10 sm:placeholder:text-white'
                                            type='text'
                                            value={updatedText}
                                            onChange={(e) => setUpdatedText(e.target.value)}
											placeholder='eg. Finish the project'
										/>
									</div>

									<div className='Frame5702 self-stretch justify-end gap-2 items-start inline-flex'>
										<button
											onClick={closeModal}
											className='Button3 px-[18px] py-2.5 rounded-[60px]  justify-start items-center gap-1.5 flex'>
											<div
												className='Label text-center text-purple-500 text-sm font-semibold leading-[18px]'
												onClick={closeModal}>
												Cancel
											</div>
										</button>
										<button className='Button1 px-[18px] py-2.5 bg-purple-500 rounded-[20px] justify-center items-center gap-1.5 flex' onClick={updateTodoHandler}>
											<div className='Label text-center text-black text-sm font-semibold leading-[18px]'>
												Save
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						ref={modalRef}
						className='fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-[2px]'
					/>
				</div>
			) : null}
		</>
	);
};

export default Modal;
