import { ValueOf } from '@/shared/types/types'

export const SortVariant = {
	VIEWS: 'views',
	DATE: 'createdAt',
	TITLE: 'title',
} as const

export type SortVariantType = ValueOf<typeof SortVariant>
