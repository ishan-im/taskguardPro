import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../view/LoginWithWeb3Wallet';
import SignIn from '../view/SignIn';

function withValidLogin(WrappedComponent) {
	return function WithValidLoginComponent(props) {
		const token = useSelector((state) => state.auth.token);

		const jwtToken = useSelector((state) => state.auth.jwtToken);

	

		if (!token) {
			if (!jwtToken) {
				return (
					<>
						<SignIn />
					</>
				);
			} else {
				return (
					<>
						<Login />
					</>
				);
			}
		} else {
			return <WrappedComponent {...props} />;
		}
	};
}

export default withValidLogin;
