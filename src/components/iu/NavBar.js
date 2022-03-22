import { Link } from 'react-router-dom';

import { NavBarLink } from '../../helpers/toolHelper';

export default function NavBar() {
	const handleLogout = () => {
		// TODO: Por hacer
		console.log('logOut');
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
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
					<ul className="navbar-nav ml-auto">
						<span className="nav-item nav-link text-info">
							Enrique Peñaloza
						</span>
						<button className="btn nav-item nav-link" onClick={handleLogout}>
							Logout
						</button>
					</ul>
				</div>
			</nav>
		</>
	);
}
