import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../helpers/authHelper';

export default function PrivateRouter({ children }) {
	const {
		user: { logged },
	} = useContext(AuthContext);
	const { pathname, search } = useLocation();

	localStorage.setItem('lastPath', `${pathname}${search}`);

	return logged ? children : <Navigate to="/login" />;
}
