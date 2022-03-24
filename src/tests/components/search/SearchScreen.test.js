import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Pruebas en <SearchScreen />', () => {
	test('Debe de mostrar <SearchScreen /> correctamente', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/serach']}>
				<SearchScreen />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.alert-info').text().trim()).toBe(
			'Realiza una busqueda'
		);
	});

	test('Debe de mostrar al superheroe enviado en queryString', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/serach?q=batman']}>
				<SearchScreen />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('input').prop('value')).toBe('batman');
	});

	test('Debe de mostrar -mensaje sin resultados', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/serach?q=jhgytfj']}>
				<SearchScreen />
			</MemoryRouter>
		);

		expect(wrapper.find('.alert-danger').text().trim()).toBe(
			'No se encontraron resultados para: (jhgytfj)'
		);
	});

	test('Debe de llamar al navigate al nuevo url', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/serach']}>
				<SearchScreen />
			</MemoryRouter>
		);

		wrapper.find('input').simulate('change', {
			target: {
				name: 'heroName',
				value: 'batman',
			},
		});

		wrapper.find('form').prop('onSubmit')({
			preventDefault: () => {},
		});

		expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
	});
});
