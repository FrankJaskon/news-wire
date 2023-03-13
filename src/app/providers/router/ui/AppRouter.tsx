import { FC, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'
import { AuthRouteProps, routerConfig } from './routeConfig'

export const AppRouter: FC = () => {
	const renderWithWrapper = useCallback((route: AuthRouteProps) => {
		const element = <Suspense fallback={<PageLoader />}>
			{route.element}
		</Suspense>

		return <Route
			key={route.path}
			path={route.path}
			element={
				route.authOnly
					? <RequireAuth>{element}</RequireAuth>
					: element
			}
		/>
	}, [])

	return <Routes>
		{routerConfig.map(route => renderWithWrapper(route))}
	</Routes>
}