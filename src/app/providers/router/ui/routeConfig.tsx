import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFound } from 'pages/NotFound'
import { RouteProps } from 'react-router-dom'
import { routePaths } from 'shared/config/routePaths/routPaths'

export const routerConfig: RouteProps[] = [
	{
		path: routePaths.main,
		element: <MainPage />
	},
	{
		path: routePaths.about,
		element: <AboutPage />
	},
	{
		path: routePaths.not_found,
		element: <NotFound />
	}
]