import { NavLink } from 'react-router-dom';
import { heroes } from '../data/heroes';

export const NavBarLink = ({ children, to, className = '', ...props }) => {
	return (
		<>
			<NavLink
				className={({ isActive }) =>
					isActive ? `${className} active` : `${className}`
				}
				to={to}
				{...props}
			>
				{children}
			</NavLink>
		</>
	);
};

export const getHeroesById = (id) => {};

export const getHeroesByPublisher = (publisher) => {
	const validPublishers = ['DC Comics', 'Marvel Comics'];

	if (!validPublishers.includes(publisher)) {
		throw new Error(`${publisher} is not a valid publisher`);
	}

	return heroes.filter((hero) => hero.publisher === publisher);
};
