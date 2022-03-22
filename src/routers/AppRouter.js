import { Route, Routes } from 'react-router-dom';

import DcScreen from '../components/dc/DcScreen';
import NavBar from '../components/iu/NavBar';
import LoginScree from '../components/login/LoginScree';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';

export default function AppRouter() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<MarvelScreen />} />
				<Route path="/marvel" element={<MarvelScreen />} />
				<Route path="/dc" element={<DcScreen />} />
				<Route path="/search" element={<SearchScreen />} />
				<Route path="/login" element={<LoginScree />} />
			</Routes>
		</>
	);
}
