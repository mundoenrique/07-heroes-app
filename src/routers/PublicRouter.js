import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../helpers/authHelper';

export default function PublicRouter({ children }) {
	const {
		user: { logged },
	} = useContext(AuthContext);

	return logged ? <Navigate to="/" /> : children;
}
