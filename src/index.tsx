import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import App from './app'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import React from 'react'

render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider>
				<ErrorBoundary>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ErrorBoundary>
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)