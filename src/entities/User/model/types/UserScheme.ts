import { FeatureFlags } from '@/shared/types/featureFlags'
import { ValueOf } from '@/shared/types/types'
import { JsonSettings } from './jsonSettings'

export const UserRole = {
	ADMIN: 'ADMIN',
	USER: 'USER',
	MANAGER: 'MANAGER',
} as const

export type UserRoleType = ValueOf<typeof UserRole>

export interface User {
	id: number
	username: string
	avatar?: string
	roles: UserRoleType[]
	jsonSettings?: JsonSettings
	features?: FeatureFlags
}

export interface UserScheme {
	authData?: User

	_initialized: boolean
}
