import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../../../components/iu/NavBar';
import { AuthContext } from '../../../helpers/authHelper';
import { types } from '../../../helpers/toolHelper';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Pruebas en el <NavBar />', () => {
	const contextValue = {
		user: {
			name: 'Enrique Peñaloza',
			logged: true,
		},
		dispatch: jest.fn(),
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route path="/" element={<NavBar />} />
				</Routes>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	test('Debe mostrarse correctamente el <NavBar />', () => {
		const {
			user: { name },
		} = contextValue;

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-info').text().trim()).toBe(name);
	});

	test('Debe llamar al logout, al navigate y el dispatch', () => {
		wrapper.find('button').prop('onClick')();

		expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
		expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
