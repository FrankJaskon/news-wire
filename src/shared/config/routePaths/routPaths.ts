import { ValueOf } from '../types/types'

export const AppRoutes = {
	MAIN: 'main',
	ABOUT: 'about',
	PROFILE: 'profile',
	ARTICLES: 'articles',
	ARTICLES_DETAILS: 'articles_details',

	// last
	NOT_FOUND: 'not_found'
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const routePaths: Record<AppRoutesTypes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLES_DETAILS]: '/articles/', // + 'id'

	// last
	[AppRoutes.NOT_FOUND]: '*'
}