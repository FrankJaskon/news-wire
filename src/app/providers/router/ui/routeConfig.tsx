import { RouteProps } from 'react-router-dom'
import { UserRole, UserRoleType } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanel } from '@/pages/AdminPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { CreateArticlePage } from '@/pages/CreateArticlePage'
import { EditArticlePage } from '@/pages/EditArticlePage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFound } from '@/pages/NotFound'
import { ProfilePage } from '@/pages/ProfilePage'
import { UserSettings } from '@/pages/UserSettings'
import {
	getAboutRoute,
	getAdminRoute,
	getArticleDetailsRoute,
	getArticlesRoute,
	getEditArticleDetailsRoute,
	getForbiddenRoute,
	getMainRoute,
	getNewArticleDetailsRoute,
	getNotFoundRoute,
	getProfileRoute,
	getUsersSettingsRoute,
} from '@/shared/const/RoutPaths'

export type AuthRouteProps = RouteProps & {
	authOnly?: boolean
	roles?: UserRoleType[]
}

export const routerConfig: AuthRouteProps[] = [
	{
		path: getMainRoute(),
		element: <MainPage />,
	},
	{
		path: getAboutRoute(),
		element: <AboutPage />,
	},
	{
		path: getProfileRoute(':id'),
		element: <ProfilePage />,
		authOnly: true,
	},
	{
		path: getArticlesRoute(),
		element: <ArticlesPage />,
		authOnly: true,
	},
	{
		path: getArticleDetailsRoute(':id'),
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
	{
		path: getEditArticleDetailsRoute(':id'),
		element: <EditArticlePage />,
		authOnly: true,
	},
	{
		path: getNewArticleDetailsRoute(),
		element: <CreateArticlePage />,
		authOnly: true,
	},
	{
		path: getAdminRoute(),
		element: <AdminPanel />,
		authOnly: true,
		roles: [UserRole.ADMIN, UserRole.MANAGER],
	},
	{
		path: getUsersSettingsRoute(),
		element: <UserSettings />,
		authOnly: true,
	},

	// forbidden
	{
		path: getForbiddenRoute(),
		element: <ForbiddenPage />,
	},

	// last
	{
		path: getNotFoundRoute(),
		element: <NotFound />,
	},
]
