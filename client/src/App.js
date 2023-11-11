import { Routes, Route } from 'react-router-dom';

import CarSafety from './pages/CarSafety';
import CarPage from './pages/CarPage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TablePage from './pages/TablePage';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='dashboard'
					element={<Dashboard />}
				/>
				<Route
					path='/table'
					element={<TablePage />}
				/>
				<Route
					path='/raw'
					element={<CarPage />}
				/>
				<Route
					path='/safety'
					element={<CarSafety />}
				/>
				<Route
					path='/raw'
					element={<CarPage />}
				/>
			</Routes>
		</>
	);
}

export default App;
