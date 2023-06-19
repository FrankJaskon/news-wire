import { ValueOf } from '@/shared/types/types'

export const ArticleCategories = {
	IT: 'IT',
	SCIENCE: 'SCIENCE',
	ECONOMIC: 'ECONOMIC',
} as const

export type ArticleCategoriesType = ValueOf<typeof ArticleCategories>
