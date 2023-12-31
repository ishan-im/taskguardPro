import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo,completeTodo } from '../features/todo/todoSlice';

import Edit from '../assets/icons/edit-2.svg';
import Delete from '../assets/icons/delete.svg';
import Modal from './Modal';

function TodoList({ id, text, done }) {
	const dispatch = useDispatch();

	const removeTodoHandler = () => {
		dispatch(removeTodo(id));
	
    };



    const [doneTodo, setDoneTodo] = useState(done);

    const handleDone = () => {
        setDoneTodo(!doneTodo);
        dispatch(completeTodo({
            id,
            done: doneTodo,
        }));
    }


    
    const [openModal, setOpenModal] = useState(false);

		const handleModalToggle = () => {
			setOpenModal(!openModal);
		};

    return (
			<>
				<Modal isOpen={openModal} setIsOpen={setOpenModal} text={text} id={id} />
				<div
					key={id}
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.03)',
						borderColor: 'rgba(255, 255, 255, 0.03)',
					}}
					className='w-[380px] p-[30px] rounded-[30px] border-[2px] sm:w-[490px] sm:p-[25px] sm:rounded-[30px] sm:border-[2px] flex-col justify-start items-start gap-[20px] inline-flex mb-4'>
					<div className='flex items-center justify-between w-full'>
						<div className='flex items-center gap-4'>
							<input
								type='checkbox'
								onChange={handleDone}
								checked={doneTodo}
								className='bg-transparent p-3 cursor-pointer'
							/>
							<p
								className={`${
									doneTodo ? 'line-through' : ''
								} bg-transparent text-[18px] text-[#A68DFF] font-[600] flex-grow`}>
								{text}
							</p>
						</div>
						<div className='flex items-center gap-4'>
							<button
                            className={`Button1 ${doneTodo? 'opacity-50': 'opacity-100'} p-[18px] py-2.5 bg-purple-500 rounded-[20px] justify-center items-center gap-1.5 flex cursor-pointer`}
                                disabled={doneTodo}
								onClick={handleModalToggle}>
								<div className='VuesaxBoldEdit2 w-4 h-4 justify-center items-center flex'>
									<img
										src={Edit}
										className='w-4 h-4  inline-block'
										alt={Edit}
									/>
								</div>
							</button>
							<button
								className='Button1 p-[18px] py-2.5 bg-purple-500 rounded-[20px] justify-center items-center gap-1.5 flex cursor-pointer'
								onClick={removeTodoHandler}>
								<div className='VuesaxBoldEdit2 w-4 h-4 justify-center items-center flex'>
									<img
										src={Delete}
										className='w-4 h-4  inline-block'
										alt={Delete}
									/>
								</div>
							</button>
						</div>
					</div>
				</div>
			</>
		);
}

export default TodoList;
