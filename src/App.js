import './App.css';
import withValidLogin from './hoc/withValidLogin';
import Todos from './components/Todos';
import {
  
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
const AuthTodos = withValidLogin(Todos);

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<AuthTodos />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</>
	);
}

export default App;
