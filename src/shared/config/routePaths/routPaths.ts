import { ValueOf } from '../types/types'

export const AppRoutes = {
	MAIN: 'main',
	ABOUT: 'about',
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const routePaths: Record<AppRoutesTypes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about'
}