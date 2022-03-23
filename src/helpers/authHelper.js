import { createContext } from 'react';

import { types } from './toolHelper';

export const AuthContext = createContext(null);

export const authReducer = (state = {}, action) => {
	const { login, logout } = types;
	const { type, payload } = action;

	switch (type) {
		case login:
			return {
				...payload,
				logged: true,
			};
		case logout:
			return {
				logged: false,
			};
		default:
			return state;
	}
};
