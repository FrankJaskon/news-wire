import { ValueOf } from '../types/types'

export const getMainRoute = () => '/'
export const getAboutRoute = () => '/about'
export const getProfileRoute = (id: number | string) => '/profiles/' + id
export const getArticlesRoute = () => '/articles'
export const getArticleDetailsRoute = (id: number | string) => '/articles/' + id
export const getEditArticleDetailsRoute = (id: number | string) => `/articles/${id}/edit`
export const getNewArticleDetailsRoute = () => '/articles/new'
export const getAdminRoute = () => '/admin'
export const getUsersSettingsRoute = () => '/settings'
export const getForbiddenRoute = () => '/forbidden'
export const getNotFoundRoute = () => '*'

// request routes

export const getLoginRoute = () => '/login'
export const getUsersRoute = () => '/users'
export const getOneUserRoute = (id: number | string) => '/users/' + id
export const getCommentsRoute = () => '/comments'

export const AppRoutes = {
	MAIN: getMainRoute(),
	ABOUT: getAboutRoute(),
	PROFILE: getProfileRoute(':id'),
	ARTICLES: getArticlesRoute(),
	ARTICLE_DETAILS: getArticleDetailsRoute(':id'),
	ARTICLE_EDITING: getEditArticleDetailsRoute(':id'),
	ARTICLE_CREATING: getNewArticleDetailsRoute(),
	ADMIN: getAdminRoute(),
	SETTINGS: getUsersSettingsRoute(),
	FORBIDDEN: getForbiddenRoute(),
	NOT_FOUND: getNotFoundRoute(),
} as const

export type AppRouteType = ValueOf<typeof AppRoutes>
