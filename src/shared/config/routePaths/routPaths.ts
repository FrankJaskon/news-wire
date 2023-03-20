import { ValueOf } from '../types/types'

export const AppRoutes = {
	MAIN: 'main',
	ABOUT: 'about',
	PROFILE: 'profile',
	ARTICLES: 'articles',
	ARTICLES_DETAILS: 'articles_details',
	ARTICLES_DETAILS_COMMENTS: 'articles_details_comments',

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
	[AppRoutes.ARTICLES_DETAILS_COMMENTS]: '/comments/', // path to GET COMMENTS

	// last
	[AppRoutes.NOT_FOUND]: '*'
}