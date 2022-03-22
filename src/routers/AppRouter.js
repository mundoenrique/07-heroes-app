import { Route, Routes } from 'react-router-dom';

import LoginScree from '../components/login/LoginScree';
import DashboardRouter from './DashboardRouter';

export default function AppRouter() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginScree />} />
				<Route path="/*" element={<DashboardRouter />} />
			</Routes>
		</>
	);
}
