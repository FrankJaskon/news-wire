import { ProfileType } from '@/entities/Profile'
import { ValueOf } from '@/shared/types/types'

export const ValidateProfileError = {
	INCORRECT_FIRSTNAME: 'INCORRECT_FIRSTNAME',
	INCORRECT_LASTNAME: 'INCORRECT_LASTNAME',
	INCORRECT_USERNAME: 'INCORRECT_USERNAME',
	INCORRECT_CITY: 'INCORRECT_CITY',
	INCORRECT_AVATAR: 'INCORRECT_AVATAR',
	INCORRECT_AGE: 'INCORRECT_AGE',
	SERVER_ERROR: 'SERVER_ERROR',
	INCORRECT_DATA: 'INCORRECT_DATA',
	NO_DATA: 'NO_DATA',
} as const

export type ValidateProfileErrorType = ValueOf<typeof ValidateProfileError>

export interface ProfileScheme {
	data?: ProfileType
	form?: ProfileType
	isLoading: boolean
	readonly: boolean
	validateError?: ValidateProfileErrorType[]
	loadingError?: ValidateProfileErrorType
}
