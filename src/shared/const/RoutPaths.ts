import { ValueOf } from '../types/types'

export const AppRoutes = {
	MAIN: 'main',
	ABOUT: 'about',
	PROFILE: 'profiles',
	ARTICLES: 'articles',
	ARTICLES_DETAILS: 'articles_details',
	ARTICLES_DETAILS_EDIT: 'articles_details_edit',
	ARTICLES_DETAILS_NEW: 'articles_details_new',
	ADMIN_PAGE: 'admin',
	FORBIDDEN: 'forbidden',

	// last
	NOT_FOUND: 'not_found'
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const getMainRoute = () => '/'
export const getAboutRoute = () => '/about'
export const getProfileRoute = (id: number | string) => '/profiles/' + id
export const getArticlesRoute = () => '/articles'
export const getArticleDetailsRoute = (id: number | string) => '/articles/' + id
export const getEditArticleDetailsRoute = (id: number | string) => `/articles/${id}/edit`
export const getNewArticleDetailsRoute = () => '/articles/new'
export const getAdminRoute = () => '/admin'
export const getForbiddenRoute = () => '/forbidden'
export const getNotFoundRoute = () => '*'