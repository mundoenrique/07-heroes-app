import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../helpers/authHelper';
import { types } from '../../helpers/toolHelper';

export default function LoginScree() {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		dispatch({
			type: types.login,
			payload: { name: 'Enrique Peñaloza' },
		});
		navigate('/', { replace: true });
	};

	return (
		<>
			<div className="container mt-5">
				<h1>LoginScree</h1>
				<hr />
				<button className="btn btn-primary" onClick={handleLogin}>
					Login
				</button>
			</div>
		</>
	);
}
