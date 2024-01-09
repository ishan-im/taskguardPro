import React, { useEffect, useState } from 'react';
import { setToken, removeToken } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import TrusWallet from "../assets/icons/Trust-Wallet.png"
import { loadStateFromLocalStorage } from '../utils/localStorage';

const Login = () => {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.auth.token);

	

	const todo = useSelector((state) => state.todos.todos);

	const [connectedWallet, setConnectedWallet] = useState(null);

	useEffect(() => {
		if (token) {
			setConnectedWallet(token);
		}
	}, [token]);

	const connectMetamaskWallet = async () => {
		try {
			if (typeof window.ethereum !== 'undefined') {
				let provider = window.ethereum;
				// edge case if MM and CBW are both installed
				if (window.ethereum.providers?.length) {
					window.ethereum.providers.forEach(async (p) => {
						if (p.isMetaMask) provider = p;
						
					});
				}
				const accounts = await provider.request({
					method: 'eth_requestAccounts',
					params: [],
				});

				// Set the connected wallet in state
				dispatch(setToken(accounts[0]));
				setConnectedWallet(accounts[0]);
				
				// Listen for account changes
				window.ethereum.on('accountsChanged', (newAccounts) => {
					setConnectedWallet(newAccounts[0]);
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	const connectCoinbaseWallet = async () => {
		try {
			if (typeof window.ethereum !== 'undefined') {
				let provider = window.ethereum;
				
				if (window.ethereum.providers?.length) {
					window.ethereum.providers.forEach(async (p) => {
						if (p.isCoinbaseWallet) provider = p;
					});
				}
				const accounts = await provider.request({
					method: 'eth_requestAccounts',
					params: [],
				});

						// Set the connected wallet in state
						dispatch(setToken(accounts[0]));
				setConnectedWallet(accounts[0]);
				
				

						// Listen for account changes
						window.ethereum.on('accountsChanged', (newAccounts) => {
							setConnectedWallet(newAccounts[0]);
						});
			}
		} catch (err) {
			console.log(err);
		}

	}

	const connectTrustWallet = async () => {
		try {
			if (typeof window.ethereum !== 'undefined') {
				let provider = window.ethereum;
				
				if (window.ethereum.providers?.length) {
					window.ethereum.providers.forEach(async (p) => {
						if (p.isTrust) provider = p;
					});
				}
				const accounts = await provider.request({
					method: 'eth_requestAccounts',
					params: [],
				});

						// Set the connected wallet in state
						dispatch(setToken(accounts[0]));
				setConnectedWallet(accounts[0]);
				

				

						// Listen for account changes
						window.ethereum.on('accountsChanged', (newAccounts) => {
							setConnectedWallet(newAccounts[0]);
						});
			}
		} catch (err) {
			console.log(err);
		}

	}

	

	return (
		<>
			{!token && (
				<div className='w-full min-h-screen flex justify-center items-center bg-black px-4 md:px-8 lg:px-16 md:py-16'>
					<div className='w-full max-w-3xl bg-black relative'>
						<div className='w-full md:w-[357px] h-80 bg-white bg-opacity-5 rounded-[20px] border border-violet-500 border-opacity-50 mx-auto flex flex-col justify-center items-center p-6 md:mt-4 relative'>
							<img
								className={`w-40 h-40 absolute left-1/2 top-[-100px] transform -translate-x-1/2`}
								src={'https://cursor.sh/brand/logo.svg'}
								alt='new'
							/>

							<div className='text-violet-400 text-2xl font-semibold text-center mb-4'>
								Taskguard Pro
							</div>
							<div className='w-[232px] text-neutral-400 text-base font-normal text-center mb-6'>
								Connect your wallet before proceed.
							</div>

							<button
								className='w-full h-12 px-4 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-[20px] shadow text-white font-semibold flex justify-center items-center gap-2 disabled:opacity-70'
								onClick={connectMetamaskWallet}>
								<img
									src={
										'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png'
									}
									alt='empty_wallet'
									className='w-7 h-7'
								/>
								<div> Connect Metamask Wallet</div>
							</button>
							<button
								className='w-full mt-2 h-12 px-4 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-[20px] shadow text-white font-semibold flex justify-center items-center gap-2 disabled:opacity-70'
								onClick={connectCoinbaseWallet}>
								<img
									src={
										'https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png'
									}
									alt='empty_wallet'
									className='w-7 h-7'
								/>

								<div> Connect Coinbase Wallet</div>
							</button>
							<button
								className='w-full mt-2 h-12 px-4 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-[20px] shadow text-white font-semibold flex justify-center items-center gap-2 disabled:opacity-70'
								onClick={connectTrustWallet}>
								<img src={TrusWallet} alt='empty_wallet' className='w-10 h-10' />
								<div> Connect Trust Web Wallet</div>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Login;
