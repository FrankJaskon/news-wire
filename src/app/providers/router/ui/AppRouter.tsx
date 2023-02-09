import { FC, Suspense } from 'react'
import { Route, RouteProps, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { routerConfig } from './routeConfig'

export const AppRouter: FC = () => {
	return <Suspense fallback={<PageLoader />}>
		<Routes>
			{
				routerConfig.map((props: RouteProps) => (
					<Route key={props.path} {...props} />
				))
			}
		</Routes>
	</Suspense>
}