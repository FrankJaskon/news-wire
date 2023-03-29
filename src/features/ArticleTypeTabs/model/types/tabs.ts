import { ValueOf } from 'shared/types/types'

export const ArticlesTypes = {
	ALL: 'ALL',
	IT: 'IT',
	SCIENCE: 'SCIENCE',
	ECONOMIC: 'ECONOMIC'
}  as const

export type ArticlesTypesType = ValueOf<typeof ArticlesTypes>