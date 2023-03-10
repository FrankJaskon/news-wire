import { ValueOf } from 'shared/config/types/types'

export const Currency = {
	UAH: 'UAH',
	USD: 'USD'
} as const

export type CurrencyType = ValueOf<typeof Currency>