import { ValueOf } from '../types/types'

export const AppRoutes = {
	MAIN: 'main',
	ABOUT: 'about',
	NOT_FOUND: 'not_found'
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const routePaths: Record<AppRoutesTypes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*'
}