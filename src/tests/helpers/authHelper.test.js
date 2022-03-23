import { authReducer } from '../../helpers/authHelper';
import { types } from '../../helpers/toolHelper';

describe('Pruebas en helper authReducer', () => {
	test('Debe retornar el estado por defecto', () => {
		const state = authReducer({ logged: false }, {});

		expect(state).toEqual({ logged: false });
	});

	test('Debe colocar el nombre del usuario y retornar "logged:true"', () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Enrique',
			},
		};

		const state = authReducer({ logged: false }, action);

		expect(state).toEqual({
			name: 'Enrique',
			logged: true,
		});
	});

	test('Debe quitar el nombre del usuario y retornar "logged:false"', () => {
		const action = {
			type: types.logout,
			payload: {
				name: 'Enrique',
			},
		};

		const state = authReducer({ name: 'Enrique', logged: true }, action);

		expect(state).toEqual({
			logged: false,
		});
	});
});
