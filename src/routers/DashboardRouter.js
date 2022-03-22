import { Route, Routes } from 'react-router-dom';

import DcScreen from '../components/dc/DcScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import NavBar from '../components/iu/NavBar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';

export default function DashboardRouter() {
	return (
		<>
			<NavBar />
			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelScreen />} />
					<Route path="dc" element={<DcScreen />} />
					<Route path="search" element={<SearchScreen />} />
					<Route path="heroes" element={<HeroesScreen />} />
					<Route path="/" element={<MarvelScreen />} />
				</Routes>
			</div>
		</>
	);
}
