import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../helpers/authHelper';
import PrivateRouter from '../../routers/PrivateRouter';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	Navigate: () => <span>Sin acceso</span>,
}));

describe('Pruebas sobre <PrivateRouter.test />', () => {
	Storage.prototype.setItem = jest.fn();

	test('Debe validar la autenticación y escribir en el localstorage', () => {
		const contexValue = {
			user: {
				name: 'Enrique Peñaloza',
				logged: true,
			},
		};

		const wrapper = mount(
			<AuthContext.Provider value={contexValue}>
				<MemoryRouter initialEntries={['/']}>
					<PrivateRouter>
						<h1>Private Route</h1>
					</PrivateRouter>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.text().trim()).toBe('Private Route');
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
	});

	test('Debe bloquear el componente por falta de autenticación', () => {
		const contexValue = {
			user: {
				logged: false,
			},
		};

		const wrapper = mount(
			<AuthContext.Provider value={contexValue}>
				<MemoryRouter initialEntries={['/']}>
					<PrivateRouter>
						<h1>Private Route</h1>
					</PrivateRouter>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper.text().trim()).toBe('Sin acceso');
	});
});
