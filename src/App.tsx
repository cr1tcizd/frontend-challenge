import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'

function App() {
	return (
		<>
			<Routes>
				<Route path={`${import.meta.env.BASE_URL}`} element={<HomePage />} />
				<Route
					path={`${import.meta.env.BASE_URL}/*`}
					element={<Navigate to={`${import.meta.env.BASE_URL}`} replace />}
				/>
				<Route
					path={`${import.meta.env.BASE_URL}/favorite`}
					element={<FavoritePage />}
				/>
			</Routes>
		</>
	)
}

export default App
