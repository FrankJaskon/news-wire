import { ValueOf } from '@/shared/types/types'

export const RatingVariantDeprecated = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const

export type RatingVariantDeprecatedType = ValueOf<typeof RatingVariantDeprecated>
export type RatingVariantType = 'small' | 'medium' | 'large'
