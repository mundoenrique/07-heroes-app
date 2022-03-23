import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext, authReducer } from './helpers/authHelper';
import AppRouter from './routers/AppRouter';

const initReducer = () => {
	return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

function App() {
	const [user, dispatch] = useReducer(authReducer, {}, initReducer);

	return (
		<AuthContext.Provider
			value={{
				user,
				dispatch,
			}}
		>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
