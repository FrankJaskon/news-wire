import { UserRole, UserRoleType } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanel } from '@/pages/AdminPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { EditArticlePage } from '@/pages/EditArticlePage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFound } from '@/pages/NotFound'
import { ProfilePage } from '@/pages/ProfilePage'
import { RouteProps } from 'react-router-dom'
import { RoutePaths } from '@/shared/config/RoutePaths/RoutPaths'

export type AuthRouteProps = RouteProps & {
	authOnly?: boolean
	roles?: UserRoleType[]
}

export const routerConfig: AuthRouteProps[] = [
	{
		path: RoutePaths.main,
		element: <MainPage />
	},
	{
		path: RoutePaths.about,
		element: <AboutPage />
	},
	{
		path: `${RoutePaths.profiles}:id`,
		element: <ProfilePage />,
		authOnly: true
	},
	{
		path: RoutePaths.articles,
		element: <ArticlesPage />,
		authOnly: true
	},
	{
		path: `${RoutePaths.articles_details}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true
	},
	{
		path: RoutePaths.articles_details_edit,
		element: <EditArticlePage />,
		authOnly: true
	},
	{
		path: RoutePaths.articles_details_new,
		element: <EditArticlePage />,
		authOnly: true
	},
	{
		path: RoutePaths.admin,
		element: <AdminPanel />,
		authOnly: true,
		roles: [UserRole.ADMIN, UserRole.MANAGER]
	},

	// forbidden
	{
		path: RoutePaths.forbidden,
		element: <ForbiddenPage />
	},

	// last
	{
		path: RoutePaths.not_found,
		element: <NotFound />
	}
]