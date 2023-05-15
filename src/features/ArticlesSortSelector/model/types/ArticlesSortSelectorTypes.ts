import { ValueOf } from '@/shared/types/types'

export const ArticlesSortVariant = {
	VIEWS: 'views',
	DATE: 'createdAt',
	TITLE: 'title',
} as const

export type ArticlesSortVariantType = ValueOf<typeof ArticlesSortVariant>
