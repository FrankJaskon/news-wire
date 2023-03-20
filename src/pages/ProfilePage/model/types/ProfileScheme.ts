import type { CountryType } from 'entities/Country'
import type { CurrencyType } from 'entities/Currency'
import { ValueOf } from 'shared/config/types/types'

export const ValidateProfileError = {
	INCORRECT_FIRSTNAME: 'INCORRECT_FIRSTNAME',
	INCORRECT_LASTNAME: 'INCORRECT_LASTNAME',
	INCORRECT_USERNAME: 'INCORRECT_USERNAME',
	INCORRECT_CITY: 'INCORRECT_CITY',
	INCORRECT_AVATAR: 'INCORRECT_AVATAR',
	INCORRECT_AGE: 'INCORRECT_AGE',
	SERVER_ERROR: 'SERVER_ERROR',
	INCORRECT_DATA: 'INCORRECT_DATA',
	NO_DATA: 'NO_DATA'
} as const

export type ValidateProfileErrorType = ValueOf<typeof ValidateProfileError>

export interface Profile {
	id?: number
	firstname?: string
	lastname?: string
	age?: number
	currency?: CurrencyType
	country?: CountryType
	city?: string
	username?: string
	avatar?: string
}

export interface ProfileScheme {
	data?: Profile,
	form?: Profile,
	isLoading: boolean,
	readonly: boolean,
	validateError?: ValidateProfileErrorType[],
	loadingError?: ValidateProfileErrorType
}