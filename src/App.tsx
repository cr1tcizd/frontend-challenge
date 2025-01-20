import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'

function App() {
	return (
		<>
			<Routes>
				<Route path='frontend-challenge/' element={<HomePage />} />
				<Route
					path='frontend-challenge/*'
					element={<Navigate to={`${import.meta.env.BASE_URL}`} replace />}
				/>
				<Route path='frontend-challenge/favorite' element={<FavoritePage />} />
			</Routes>
		</>
	)
}

export default App
