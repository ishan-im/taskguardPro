import React from 'react'
import logout_svg from '../assets/icons/logout.svg'
import { useDispatch } from 'react-redux';
import { removeToken } from '../features/auth/authSlice';

function Navbar() {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeToken())
        
		window.ethereum.removeAllListeners('accountsChanged');
    }

  return (
		<nav className='flex justify-between items-center  w-2/2 mx-auto bg-black'>
			<div>
				<img
					className='w-[80px] h-[50px] mt-7 ml-8 sm:w-[105px] sm:h-[55px] sm:ml-[100px] sm:mt-[43px] sm:cursor-pointer'
					src={'https://cursor.sh/brand/logo.svg'}
					alt='new_img'
				/>
			</div>

			<div className='flex mr-14 mt-2 sm:justify-start sm:gap-6 sm:mr-22 sm:mt-2'>
				<button onClick={handleLogout} className='invisible sm:relative sm:visible sm:bg-black sm:border-[#B36CFF] sm:border-[1px] sm:px-[8px] sm:py-[16px] sm:w-[120px] sm:h-[40px] sm:rounded-[60px] sm:mr-20 sm:mt-[23px] sm:hover:border-[#94deef]'>
					<img
						src={logout_svg}
						className='absolute left-3 bottom-3 w-[16px] h-[16px]'
						alt='...'
					/>
					<p className='absolute bottom-2 left-12 text-[16px] text-[#B36CFF]'>
						Logout
					</p>
				</button>

				<button onClick={handleLogout}>
					<img
						src={logout_svg}
						className=' visible cursor-pointer ml-3 w-[22px] h-[20px] mt-[25px] sm:absolute sm:cursor-pointer sm:right-20 sm:top-8 sm:w-[20px] sm:h-[20px] sm:invisible'
						alt='logout'
					/>
				</button>
			</div>
		</nav>
	);
}

export default Navbar