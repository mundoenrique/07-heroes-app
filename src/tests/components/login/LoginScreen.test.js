import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import LoginScreen from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../helpers/authHelper';
import { types } from '../../../helpers/toolHelper';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Pruebas en <LoginScreen />', () => {
	const contextValue = {
		user: {
			logged: false,
		},
		dispatch: jest.fn(),
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter initialEntries={['/login']}>
				<Routes>
					<Route path="/login" element={<LoginScreen />} />
				</Routes>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	test('Debe mostrarse correctamente el <LoginScreen />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe hacer le dispatch y la navegación', () => {
		const handleClick = wrapper.find('button').prop('onClick');
		handleClick();

		expect(contextValue.dispatch).toHaveBeenCalledWith({
			type: types.login,
			payload: {
				name: 'Enrique Peñaloza',
			},
		});

		expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });

		localStorage.setItem('lastPath', '/dc');
		handleClick();

		expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
	});

	/* test('Debe hacer le dispatch y la navegación', () => {
		const { dispatch } = contextValue;
		const { name } = wrapper.find('input').first().props();

		wrapper.find('form').simulate('submit');

		expect(dispatch).toHaveBeenCalledWith({
			type: 'LOGIN',
			payload: { name },
		});
		expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
	}); */
});
