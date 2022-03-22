import { Link } from 'react-router-dom';

import { NavBarLink } from '../../helpers/toolHelper';

export default function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">
					Asociaciones
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						<NavBarLink className="nav-item nav-link" end to="/marvel">
							Marvel
						</NavBarLink>

						<NavBarLink className="nav-item nav-link" end to="/dc">
							DC
						</NavBarLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						<NavBarLink className="nav-item nav-link" end to="/login">
							Logout
						</NavBarLink>
					</ul>
				</div>
			</nav>
		</>
	);
}
