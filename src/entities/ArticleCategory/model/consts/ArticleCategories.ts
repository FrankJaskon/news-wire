import { ValueOf } from '@/shared/types/types'

export const ArticleCategories = {
	IT: 'IT',
	SCIENCE: 'SCIENCE',
	ECONOMIC: 'ECONOMIC',
	ART: 'ART',
	SPORT: 'SPORT',
	HEALTH: 'HEALTH',
	TRAVEL: 'TRAVEL',
} as const
export type ArticleCategoriesType = ValueOf<typeof ArticleCategories>
