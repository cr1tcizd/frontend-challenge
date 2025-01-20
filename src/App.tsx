import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/*' element={<HomePage />} />
				<Route path='/favorite' element={<FavoritePage />} />
			</Routes>
		</>
	)
}

export default App
