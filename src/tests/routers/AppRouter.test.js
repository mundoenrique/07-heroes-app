import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../helpers/authHelper';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas sobre <AppRouter />', () => {
	test('Debe mostrar el login si el usuario no esta autenticado', () => {
		const contextValue = {
			user: {
				logged: false,
			},
		};

		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<AppRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h1').text().trim()).toBe('LoginScreen');
	});

	test('Debe mostrar el dashboard si el usuario esta autenticado', () => {
		const contextValue = {
			user: {
				logged: true,
				name: 'Enrique',
			},
		};

		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<AppRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.navbar').exists()).toBeTruthy();
	});
});
