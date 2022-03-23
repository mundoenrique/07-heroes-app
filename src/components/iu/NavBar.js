import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../helpers/authHelper';

import { NavBarLink, types } from '../../helpers/toolHelper';

export default function NavBar() {
	const {
		user: { name },
		dispatch,
	} = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch({
			type: types.logout,
		});

		navigate('/login', { replace: true });
	};

	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">
					Asociaciones
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						<NavBarLink className="nav-item nav-link" to="/marvel">
							Marvel
						</NavBarLink>
						<NavBarLink className="nav-item nav-link" to="/dc">
							DC
						</NavBarLink>
						<NavBarLink className="nav-item nav-link" to="/search">
							Search
						</NavBarLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
					<ul className="navbar-nav ml-auto">
						<span className="nav-item nav-link text-info">{name}</span>
						<button className="btn nav-item nav-link" onClick={handleLogout}>
							Logout
						</button>
					</ul>
				</div>
			</nav>
		</>
	);
}
