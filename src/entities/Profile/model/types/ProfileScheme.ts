import { CountryType, CurrencyType } from 'shared/const/common'

export interface Profile {
	firstname: string
    lastname: string
    age: number
    currency: CurrencyType
    country: CountryType
    city: string
    username: string
    avatar: string
}

export interface ProfileScheme {
	data?: Profile,
	isLoading: boolean,
	error?: string
}