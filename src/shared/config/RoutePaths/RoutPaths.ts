import { ValueOf } from '../../types/types'

export const AppRoutes = {
	MAIN: 'main',
	ABOUT: 'about',
	PROFILE: 'profile',
	ARTICLES: 'articles',
	ARTICLES_DETAILS: 'articles_details',
	ARTICLES_DETAILS_EDIT: 'articles_details_edit',
	ARTICLES_DETAILS_NEW: 'articles_details_new',

	// last
	NOT_FOUND: 'not_found'
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const RoutePaths: Record<AppRoutesTypes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/', // + 'id'
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLES_DETAILS]: '/articles/', // + 'id'
	[AppRoutes.ARTICLES_DETAILS_EDIT]: '/articles/:id/edit',
	[AppRoutes.ARTICLES_DETAILS_NEW]: '/articles/new',

	// last
	[AppRoutes.NOT_FOUND]: '*'
}