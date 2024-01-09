import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { checkString } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { setJWTToken } from '../features/auth/authSlice';


function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [buttonTxt, setButtonTxt] = useState('Sign In');

	const dispatch = useDispatch();
	const navigate = useNavigate();	


	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setButtonTxt('Sign In');
		setError(null);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		setButtonTxt('Sign In');
		setError(null);
	};

	const signInHandler = async (e) => {
		e.preventDefault();

		try {
			setError(null);

			if (email.length === 0 || password.length === 0) {
				throw new Error('Please enter all the fields');
			}

			// email validation regex and password validation regex

			if (checkString(email) < 1) {
				throw new Error("Email can't be empty");
			}

			if (!email) {
				throw new Error('Please enter email');
			}

			const emailRegex = new RegExp(
				'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
			);

			if (!emailRegex.test(email)) {
				throw new Error('Please enter a valid email');
			}

			if (!password) {
				throw new Error('Please enter password');
			}

			// regex to check strong password
			const strongPasswordRegex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

			if (!strongPasswordRegex.test(password)) {
				throw new Error(
					'Password must be at least 8 characters long with alphanumeric and special characters'
				);
			}

			setButtonTxt('Signing In...');

			const loginData = {
				email: email,
				password: password,
			};

			const response = await fetch(
				`${process.env.REACT_APP_AUTH_API}/api/v1/users/login`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(loginData),
				}
			);

			if (!response.ok) {
				// Handle non-successful response (e.g., show an error message)
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			// Assuming the response is JSON, you can parse it
			const responseData = await response.json();

			// Handle the response data as needed
			console.log('Login Response:', responseData);

			// Example: Access the authToken from the response
			const authToken = responseData.authToken;

			dispatch(setJWTToken(authToken));
			navigate('/');
			setButtonTxt('Sign In');
		} catch (err) {
			console.log(err.message);
			setError(err.message);
			setButtonTxt('Sign In');
			return;
		}
	};

	return (
		<div className='bg-black h-screen overflow-y-auto overflow-x-hidden sm:overflow-x-visible'>
			<div className='flex flex-col items-center relative mx-auto mt-[50px] w-full sm:w-3/6 justify-center'>
				<div className='overflow-x-hidden overflow-y-hidden sm:overflow-visible'>
					<form
						onSubmit={signInHandler}
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.03)',
							borderColor: 'rgba(255, 255, 255, 0.03)',
						}}
						className=' h-[490px]  w-[390px]  p-[30px] rounded-[30px] border-[2px]   sm:w-[490px]  sm:mb-[25px]   sm:p-[35px] sm:rounded-[30px] sm:border-[2px] flex-col justify-start items-start gap-[20px] inline-flex'>
						<div className=' justify-start items-start inline-flex '>
							<p className='text-[20px] leading-[44px]  font-[700]   text-transparent bg-clip-text bg-gradient-to-r from-[#987EF5] to-[#F19571] opacity-100 sm:text-[30px] sm:leading-[54px]  sm:font-[700]  sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-[#987EF5] sm:to-[#F19571] sm:opacity-100'>
								Sign In to TaskGuard Pro
							</p>
						</div>

						<div className=' flex-col justify-start items-start gap-2.5 flex '>
							<p className='text-[20px] text-[#A68DFF] font-[600]  sm:text-[#A68DFF] sm:font-[600]'>
								Your Email
							</p>

							<input
								className='  rounded-[15px] p-[16px] w-[335px] text-white bg-[#000000] opacity-30 border-[1px] border-opacity-60  inset-0 z-10 placeholder:text-white   sm:rounded-[15px] sm:w-[415px] sm:text-white sm:bg-[#000000] sm:opacity-30 sm:border-[1px] sm:border-opacity-60  sm:inset-0 sm:z-10 sm:placeholder:text-white'
								type='text'
								placeholder='abc@email.com'
								value={email}
								onChange={handleEmailChange}
							/>
						</div>
						<div className=' flex-col justify-start items-start gap-2.5 flex '>
							<p className='text-[20px] text-[#A68DFF] font-[600]  sm:text-[#A68DFF] sm:font-[600]'>
								Your Password
							</p>

							<input
								className='  rounded-[15px] p-[16px] w-[335px] text-white bg-[#000000] opacity-30 border-[1px] border-opacity-60  inset-0 z-10 placeholder:text-white   sm:rounded-[15px] sm:w-[415px] sm:text-white sm:bg-[#000000] sm:opacity-30 sm:border-[1px] sm:border-opacity-60  sm:inset-0 sm:z-10 sm:placeholder:text-white'
								type='text'
								placeholder='Password must be 8 characters long'
								value={password}
								onChange={handlePasswordChange}
							/>
						</div>

						<div className='Frame5718 w-[340px] sm:w-[415px] h-[45px] flex-col justify-center  items-center  flex'>
							<button
								className={`Button relative  w-full h-[45px] px-8 py-[13px]  bg-gradient-to-r from-[#C25FFF] to-[#3D29D0]  drop-shadow-[8_-2px_4px_rgba(0, 0, 0, 0.25) z-10 ${
									!checkString(email) || !checkString(password)
										? 'opacity-50'
										: 'opacity-100'
								} rounded-[20px] shadow justify-center items-center gap-2 flex`}
								disabled={!checkString(email) || !checkString(password)}>
								<div className='Next text-white text-base font-semibold'>
									{buttonTxt}
								</div>
							</button>
						</div>

						<div className='Frame5718 w-[340px] sm:w-[415px] h-[45px] justify-center  items-center  flex'>
							<Link
								to='/signup'
								className='text-[14x] text-[#A68DFF] text-center font-[400]'>
								Don't have an account? Sign Up
							</Link>
						</div>

						{error && (
							<div className='text-center w-[340px] sm:w-[415px] h-[5px] flex justify-center items-center'>
								<p className='text-[10x] text-red-600'>{error} </p>
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
