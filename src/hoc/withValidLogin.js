import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Login from '../view/Login';


function withValidLogin(WrappedComponent) {

	return function WithValidLoginComponent(props) {
		const token = useSelector((state) => state.auth.token);
		console.log(token);

		if (!token) {
            return (
							<>
								<Login />
							</>
						);
		} else {
			return <WrappedComponent {...props} />;
		}
	};
}

export default withValidLogin;
