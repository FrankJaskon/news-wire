import type { CountryType } from 'entities/Country'
import type { CurrencyType } from 'entities/Currency'

export interface Profile {
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
	error?: string,
    readonly: boolean,
}