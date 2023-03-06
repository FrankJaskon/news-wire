import { getIsAuth } from 'entities/User'
import { FC, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { AuthRouteProps, routerConfig } from './routeConfig'

export const AppRouter: FC = () => {
	const isAuth = useSelector(getIsAuth)
	const routes = useMemo(() => (
		routerConfig.filter(route => {
			if (route.authOnly && !isAuth ) {
				return false
			}
			return true
		}).map((props: AuthRouteProps) => (
			<Route key={props.path} {...props} />
		))
	), [isAuth])
	return <Suspense fallback={<PageLoader />}>
		<Routes>
			{routes}
		</Routes>
	</Suspense>
}