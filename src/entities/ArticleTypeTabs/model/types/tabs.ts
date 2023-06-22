import { ValueOf } from '@/shared/types/types'

export const ArticlesTypes = {
	ALL: 'ALL',
	IT: 'IT',
	SCIENCE: 'SCIENCE',
	ECONOMIC: 'ECONOMIC',
	ART: 'ART',
	SPORT: 'SPORT',
	HEALTH: 'HEALTH',
	TRAVEL: 'TRAVEL',
} as const

export type ArticlesTypesType = ValueOf<typeof ArticlesTypes>
