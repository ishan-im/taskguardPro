import './App.css';
import { useSelector } from 'react-redux';
import withValidLogin from './hoc/withValidLogin';
import Todos from './components/Todos';
import SignUp from './view/SignUp';
import SignIn from './view/SignIn';

import { Route, Routes, Navigate } from 'react-router-dom';
const AuthTodos = withValidLogin(Todos);

function App() {
	const jwtToken = useSelector((state) => state.auth.jwtToken);

	return (
		<>
			<Routes>
				<Route path='/' element={<AuthTodos />} />
				<Route path='*' element={<Navigate to='/' replace />} />
				<Route
					path='/signup'
					element={!jwtToken ? <SignUp /> : <Navigate to='/' replace />}
				/>
				<Route
					path='/signin'
					element={!jwtToken ? <SignIn /> : <Navigate to='/' replace />}
				/>
			</Routes>
		</>
	);
}

export default App;
