import { Route, Routes } from 'react-router-dom';

import LoginScreen from '../components/login/LoginScreen';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import DashboardRouter from './DashboardRouter';

export default function AppRouter() {
	return (
		<>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRouter>
							<LoginScreen />
						</PublicRouter>
					}
				/>
				<Route
					path="/*"
					element={
						<PrivateRouter>
							<DashboardRouter />
						</PrivateRouter>
					}
				/>
			</Routes>
		</>
	);
}
