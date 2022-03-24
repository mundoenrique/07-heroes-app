import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../helpers/authHelper';
import DashboardRouter from '../../routers/DashboardRouter';

describe('Pruebas sobre el <DashboardRouter />', () => {
	const contextValue = {
		user: {
			logged: true,
			name: 'Enrique',
		},
	};

	test('Debe mostrarse correctamente el <MarvelScrren />', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/']}>
					<DashboardRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h1').text().trim()).toBe('MarvelScreen');
	});
	test('Debe mostrarse correctamente el <Dc />', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/dc']}>
					<DashboardRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('h1').text().trim()).toBe('DcScreen');
	});
});
