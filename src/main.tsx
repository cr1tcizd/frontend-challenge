import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { CatsProvider } from './context/CatsContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<CatsProvider>
				<App />
			</CatsProvider>
		</BrowserRouter>
	</StrictMode>
)
