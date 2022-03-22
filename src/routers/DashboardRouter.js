import { Route, Routes } from 'react-router-dom';

import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
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
					<Route path="hero/:heroId" element={<HeroScreen />} />
					<Route path="/" element={<MarvelScreen />} />
				</Routes>
			</div>
		</>
	);
}
