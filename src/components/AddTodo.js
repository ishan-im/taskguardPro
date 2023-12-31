import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice"
import { removeToken } from '../features/auth/authSlice';

function AddTodo() {

  const [inputVal, setInputVal] = useState("")

  const handleNameChange = (e) => {
		setInputVal(e.target.value);
	};

	const dispatch = useDispatch();
	
	const addTodoHandler = (e) => { 
		
		e.preventDefault();
		if (inputVal.length===0) return;
		dispatch(addTodo({
			text: inputVal,
			done: false,
		}));
		setInputVal("");

	}

	const disconnectWallet = () => {
		
		// Perform any additional cleanup if needed
		dispatch(removeToken());
		window.ethereum.removeAllListeners('accountsChanged');
	};


	return (
		<><div className='bg-black overflow-y-auto overflow-x-hidden sm:overflow-x-visible'>
			<div className='flex flex-col items-center relative mx-auto mt-[50px] w-full sm:w-3/6 justify-center'>
				
				<div className='overflow-x-hidden overflow-y-hidden sm:overflow-visible'>
					<form
						onSubmit={addTodoHandler}
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.03)',
							borderColor: 'rgba(255, 255, 255, 0.03)',
						}}
						className=' h-[340px]  w-[380px]  p-[30px] rounded-[30px] border-[2px]   sm:w-[490px] sm:h-[300px]   sm:p-[35px] sm:rounded-[30px] sm:border-[2px] flex-col justify-start items-start gap-[20px] inline-flex'>
						<div className=' justify-start items-start inline-flex '>
							<p className='text-[20px] leading-[44px]  font-[700]   text-transparent bg-clip-text bg-gradient-to-r from-[#987EF5] to-[#F19571] opacity-100 sm:text-[30px] sm:leading-[54px]  sm:font-[700]  sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-[#987EF5] sm:to-[#F19571] sm:opacity-100'>
								Let's Get Started
							</p>
						</div>

						<div className=' flex-col justify-start items-start gap-2.5 flex '>
							<p className='text-[20px] text-[#A68DFF] font-[600]  sm:text-[#A68DFF] sm:font-[600]'>
								Add Your Task
							</p>

							<input
								className='  rounded-[15px] p-[16px] w-[335px] text-white bg-[#000000] opacity-30 border-[1px] border-opacity-60  inset-0 z-10 placeholder:text-white   sm:rounded-[15px] sm:w-[415px] sm:text-white sm:bg-[#000000] sm:opacity-30 sm:border-[1px] sm:border-opacity-60  sm:inset-0 sm:z-10 sm:placeholder:text-white'
								type='text'
								placeholder='eg. Finish the project'
								value={inputVal}
								onChange={handleNameChange}
							/>
						</div>

						

						<div className='Frame5718 w-[340px] sm:w-[415px] h-[45px] flex-col justify-center  items-center  flex'>
				
								

								<button
									className={`Button relative  w-full h-[45px] px-8 py-[13px]  bg-gradient-to-r from-[#C25FFF] to-[#3D29D0]  drop-shadow-[8_-2px_4px_rgba(0, 0, 0, 0.25) z-10 ${
										!inputVal
											? 'opacity-50'
											: 'opacity-100'
									} rounded-[20px] shadow justify-center items-center gap-2 flex`}
									disabled={ !inputVal}
									onClick={() => {
										console.log(inputVal);
									}}>
									<div className='Next text-white text-base font-semibold'>
										Add task
								</div>
								

								</button>
							
						</div>
					</form>

					{/* <div className='Frame5718 w-[340px] sm:w-[415px] h-[45px] flex-col justify-center  items-center  flex'>
														
								

								<button
									className={`Button relative  w-full h-[45px] px-8 py-[13px]  bg-gradient-to-r from-[#C25FFF] to-[#3D29D0]  drop-shadow-[8_-2px_4px_rgba(0, 0, 0, 0.25) z-10 
										 rounded-[20px] shadow justify-center items-center gap-2 flex`}
									
									onClick={disconnectWallet}>
									<div className='Next text-white text-base font-semibold'>
										Disconnect Wallet
								</div>
								

								</button>
							
						</div>	 */}
				</div>
			</div>
			</div>
			</>
			
	);
}

export default AddTodo