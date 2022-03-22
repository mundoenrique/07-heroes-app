import { NavLink } from 'react-router-dom';

export function NavBarLink({ children, to, className = '', ...props }) {
	return (
		<>
			<NavLink
				className={({ isActive }) =>
					isActive ? `${className} active` : className
				}
				to={to}
				{...props}
			>
				{children}
			</NavLink>
		</>
	);
}
