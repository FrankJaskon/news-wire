import { useRoutes } from 'react-router-dom'
import {
	getArticleDetailsRoute,
	getArticlesRoute,
	getEditArticleDetailsRoute,
	getNewArticleDetailsRoute,
} from '@/shared/const/RoutPaths'
import { ScrollToolbar } from '@/widgets/ScrollToolbar'

export const useSelectToolbarItem = () => {
	const routes = [
		{
			path: getArticlesRoute(),
			element: <ScrollToolbar />,
		},
		{
			path: getArticleDetailsRoute(':id'),
			element: <ScrollToolbar />,
		},
		{
			path: getNewArticleDetailsRoute(),
			element: <ScrollToolbar />,
		},
		{
			path: getEditArticleDetailsRoute(':id'),
			element: <ScrollToolbar />,
		},

		// for all others routes
		{
			path: '*',
			element: null,
		},
	]

	const matchedRoute = useRoutes(routes)

	return matchedRoute ?? undefined
}
