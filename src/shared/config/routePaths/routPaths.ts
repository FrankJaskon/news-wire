import { ValueOf } from '../types/types'

export const AppRoutes = {
	MAIN: 'main',
	ABOUT: 'about',
	PROFILE: 'profile',

	// last
	NOT_FOUND: 'not_found'
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const routePaths: Record<AppRoutesTypes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',

	// last
	[AppRoutes.NOT_FOUND]: '*'
}