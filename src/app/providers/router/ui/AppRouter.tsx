import { FC, Suspense } from 'react'
import { Route, RouteProps, Routes } from 'react-router-dom'
import { routerConfig } from './routeConfig'

export const AppRouter: FC = () => {
	return <Suspense fallback={<div>Loading</div>}>
		<Routes>
			{
				routerConfig.map((props: RouteProps) => (
					<Route key={props.path} {...props} />
				))
			}
		</Routes>
	</Suspense>
}