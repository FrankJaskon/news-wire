import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFound } from 'pages/NotFound'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'
import { routePaths } from 'shared/config/routePaths/routPaths'

export type AuthRouteProps = RouteProps & {
	authOnly?: boolean
}

export const routerConfig: AuthRouteProps[] = [
	{
		path: routePaths.main,
		element: <MainPage />
	},
	{
		path: routePaths.about,
		element: <AboutPage />
	},
	{
		path: routePaths.profile,
		element: <ProfilePage />,
		authOnly: true
	},

	// last
	{
		path: routePaths.not_found,
		element: <NotFound />
	}
]