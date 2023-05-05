import { FC, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'
import { RequireRoles } from './RequireRoles'
import { AuthRouteProps, routerConfig } from './routeConfig'

export const AppRouter: FC = () => {
	const renderWithWrapper = useCallback((route: AuthRouteProps) => {
		const element = <Suspense fallback={<PageLoader />}>
			{route.element}
		</Suspense>

		const definedElement = (element: JSX.Element) => {
			if (route?.roles && route?.roles?.length > 0) {
				return <RequireRoles roles={route.roles}>
					{element}
				</RequireRoles>
			}
			if (route.authOnly) {
				return <RequireAuth>
					{element}
				</RequireAuth>
			}
			return element
		}

		return <Route
			key={route.path}
			path={route.path}
			element={definedElement(element)}
		/>
	}, [])

	return <Routes>
		{routerConfig.map(route => renderWithWrapper(route))}
	</Routes>
}