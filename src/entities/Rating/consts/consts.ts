import { ValueOf } from '@/shared/types/types'

export const RatingVariant = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large'
} as const

export type RatingVariantType = ValueOf<typeof RatingVariant>