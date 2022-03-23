import { Route, Routes } from 'react-router-dom';

import LoginScree from '../components/login/LoginScree';
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
							<LoginScree />
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
