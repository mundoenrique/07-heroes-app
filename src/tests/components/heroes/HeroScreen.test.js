import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import HeroScreen from '../../../components/heroes/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Pruebas en <HeroScreen />', () => {
	test('No debe mostrar el <HeroScreen /> si no hay un heroe en la URL', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero']}>
				<Routes>
					<Route path="/hero" element={<HeroScreen />} />
					<Route path="/" element={<h1>No hero page</h1>} />
				</Routes>
			</MemoryRouter>
		);

		expect(wrapper.find('h1').text().trim()).toBe('No hero page');
	});

	test('Debe mostrar el <HeroScreen /> si el parametro exuste y se encuentra', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/dc-batman']}>
				<Routes>
					<Route path="/hero/:heroId" element={<HeroScreen />} />
				</Routes>
			</MemoryRouter>
		);

		expect(wrapper.find('.row').exists()).toBe(true);
	});

	test('Debe regresar a la pantalla anterior', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/dc-batman']}>
				<Routes>
					<Route path="/hero/:heroId" element={<HeroScreen />} />
				</Routes>
			</MemoryRouter>
		);

		wrapper.find('button').simulate('click');

		expect(mockNavigate).toHaveBeenCalledWith(-1);
	});

	test('debe mostrar el No hero page si el heroe no existe', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/hhfjdhdjhjdhf']}>
				<Routes>
					<Route path="/hero/:heroId" element={<HeroScreen />} />
					<Route path="/" element={<h1>No hero page</h1>} />
				</Routes>
			</MemoryRouter>
		);

		expect(wrapper.find('h1').text().trim()).toBe('No hero page');
	});
});
