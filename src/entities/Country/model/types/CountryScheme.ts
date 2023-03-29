import { ValueOf } from 'shared/types/types'

export const Country = {
	UKRAINE: 'Ukraine',
	USA: 'USA'
} as const

export type CountryType = ValueOf<typeof Country>